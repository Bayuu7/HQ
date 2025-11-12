// DSRT Engine – Core Node Class 
// - Modern scene graph using Map for children
// - Dirty flags pipeline for efficient matrix updates
// - Typed event system via SignalBus
// - RenderTraits object replaces scattered booleans
// - MetaStore replaces userData with a structured Map

import { Vec3 } from '../math/Vec3.js';
import { Quat } from '../math/Quat.js';
import { Mat4 } from '../math/Mat4.js';
import { Euler } from '../math/Euler.js';
import { LayerMask } from './LayerMask.js';
import { SignalBus } from './SignalBus.js';

let _nodeId = 0; // internal counter for numeric IDs

// Temporary math objects (avoid GC pressure in hot paths)
const _tmpVec = new Vec3();
const _tmpQuat = new Quat();
const _tmpMat = new Mat4();

export class Node extends SignalBus {
  /**
   * Node is DSRT's fundamental scene element.
   * It manages local/world transforms, hierarchy, rendering traits, and typed signals.
   */
  constructor() {
    super();

    /** Type guard flag for DSRT */
    this.isNode = true;

    /** Stable numeric ID, auto-incremented */
    Object.defineProperty(this, 'id', { value: _nodeId++ });

    /** Globally unique identifier (string) */
    this.uuid = crypto.randomUUID();

    /** Human-readable label */
    this.name = '';

    /** Type string (used for serialization) */
    this.type = 'Node';

    /** Parent node reference (null for root) */
    this.parent = null;

    /**
     * Children map keyed by child.uuid
     * - Faster lookup/removal than a raw array
     * - Enforces uniqueness
     */
    this.children = new Map();

    // ----------------------------
    // Local transform properties
    // ----------------------------

    /** Local position (units in world coordinate system) */
    this.position = new Vec3(); // (0,0,0)

    /** Local Euler rotation (radians), used for authoring convenience */
    this.rotation = new Euler(); // (0,0,0)

    /** Local orientation (quaternion), authoritative for rotation */
    this.quaternion = new Quat(); // identity

    /** Local scale (unitless), uniform by default */
    this.scale = new Vec3(1, 1, 1);

    // ----------------------------
    // Transform matrices
    // ----------------------------

    /** Local transform matrix composed from position/orient/scale */
    this.localMatrix = new Mat4();

    /** World transform matrix inherited from parent hierarchy */
    this.worldMatrix = new Mat4();

    // ----------------------------
    // Dirty flag pipeline (DSRT)
    // ----------------------------

    /**
     * Auto-compose local matrix from position/orient/scale each update step
     * - If false, caller must invoke composeLocal() manually
     */
    this.autoLocal = true;

    /**
     * Auto-inherit world transform from parent during propagate()
     * - If false, caller controls worldMatrix manually
     */
    this.inheritWorld = true;

    /**
     * Dirty flag indicating worldMatrix needs recomputation
     * - Set true whenever local change happens
     * - Cleared after propagate()
     */
    this.dirtyWorld = false;

    // ----------------------------
    // Rendering traits (DSRT)
    // ----------------------------

    /**
     * RenderTraits is a compact, extensible container for rendering behavior
     * - Prefer this over scattered booleans for clarity and extensibility
     */
    this.renderTraits = {
      /** Visibility gate: if false, renderer skips this node */
      visible: true,
      /** Shadow casting behavior: if true, contributes to shadow maps */
      shadowCast: false,
      /** Shadow receiving behavior: if true, lit by shadows */
      shadowRecv: false,
      /** Frustum culling: if true, eligible for culling */
      cullFrustum: true,
      /** Manual render order override: lower renders earlier */
      order: 0
    };

    /** Layer membership mask (camera/object filtering) */
    this.layers = new LayerMask();

    // ----------------------------
    // Animation & metadata
    // ----------------------------

    /** Animation clips attached to this node (engine-level data) */
    this.animations = [];

    /**
     * MetaStore replaces userData with a typed Map
     * - Use setMeta/getMeta for controlled access
     */
    this.metaStore = new Map();

    // ----------------------------
    // Optional custom materials (renderer-specific)
    // ----------------------------

    /** Custom depth material for shadow maps (optional) */
    this.customDepthMaterial = undefined;

    /** Custom distance material for point-light shadow maps (optional) */
    this.customDistanceMaterial = undefined;
  }

  // ============================================================
  // Transform pipeline
  // ============================================================

  /**
   * Compose localMatrix from position, quaternion (orientation), and scale.
   * - Marks world as dirty to trigger propagation in the next step.
   */
  composeLocal() {
    this.localMatrix.compose(this.position, this.quaternion, this.scale);
    this.dirtyWorld = true;
  }

  /**
   * Synchronize worldMatrix using the parent hierarchy.
   * - If inheritWorld is true, worldMatrix = parent.worldMatrix * localMatrix
   * - If there is no parent, worldMatrix = localMatrix
   */
  syncHierarchy() {
    if (!this.inheritWorld) return;
    if (this.parent === null) {
      this.worldMatrix.copy(this.localMatrix);
    } else {
      this.worldMatrix.multiplyMatrices(this.parent.worldMatrix, this.localMatrix);
    }
  }

  /**
   * Propagate transform updates through the hierarchy.
   * - If autoLocal is true, composes localMatrix first.
   * - If dirtyWorld is true or force is true, recomputes worldMatrix via syncHierarchy().
   * - Recursively pushes updates to children.
   * @param {boolean} force - Force recomputation regardless of dirtyWorld.
   */
  propagate(force = false) {
    if (this.autoLocal) this.composeLocal();

    if (this.dirtyWorld || force) {
      this.syncHierarchy();
      this.dirtyWorld = false;
      force = true; // ensure children recompute even if they were clean
    }

    for (const child of this.children.values()) {
      child.propagate(force);
    }
  }

  // ============================================================
  // Hierarchy management
  // ============================================================

  /**
   * Attach a child node to this node.
   * - Ensures detachment from previous parent
   * - Updates parent/children structures
   * - Emits typed signals: 'onAttach' (on child) and 'onChildAttach' (on parent)
   * @param {Node} child
   * @returns {this}
   */
  link(child) {
    if (!child || child === this || !child.isNode) return this;

    // If already under another parent, detach first
    child.unlink();

    // Wire hierarchy
    this.children.set(child.uuid, child);
    child.parent = this;

    // Signal both sides
    child.dispatch('onAttach', { parent: this });
    this.dispatch('onChildAttach', { child });

    // Mark transforms dirty for a clean propagate
    child.dirtyWorld = true;
    this.dirtyWorld = true;

    return this;
  }

  /**
   * Detach a child node from this node (or detach self from current parent if no arg).
   * - Updates parent/children structures
   * - Emits typed signals: 'onDetach' (on child) and 'onChildDetach' (on parent)
   * @param {Node} [child] - Child to detach; if omitted, detaches this node from its parent
   * @returns {this}
   */
  unlink(child) {
    // Detach self from current parent
    if (!child) {
      if (this.parent) {
        const p = this.parent;
        if (p.children.has(this.uuid)) {
          p.children.delete(this.uuid);
          this.parent = null;
          this.dispatch('onDetach', { parent: p });
          p.dispatch('onChildDetach', { child: this });
          this.dirtyWorld = true;
        }
      }
      return this;
    }

    // Detach a given child
    if (this.children.has(child.uuid)) {
      this.children.delete(child.uuid);
      child.parent = null;
      child.dispatch('onDetach', { parent: this });
      this.dispatch('onChildDetach', { child });
      child.dirtyWorld = true;
    }

    return this;
  }

  /**
   * Remove all children from this node.
   * - Emits detach signals for each child
   * @returns {this}
   */
  clear() {
    for (const child of this.children.values()) {
      child.parent = null;
      child.dispatch('onDetach', { parent: this });
      this.dispatch('onChildDetach', { child });
      child.dirtyWorld = true;
    }
    this.children.clear();
    this.dirtyWorld = true;
    return this;
  }

  /**
   * Traverse the node and all descendants.
   * - Avoid mutating hierarchy inside the callback
   * @param {(node: Node) => void} callback
   */
  walk(callback) {
    callback(this);
    for (const child of this.children.values()) {
      child.walk(callback);
    }
  }

  // ============================================================
  // Utility: transforms in local space (authoring helpers)
  // ============================================================

  /**
   * Rotate around a local axis (normalized) by angle in radians.
   * @param {Vec3} axis
   * @param {number} angle
   * @returns {this}
   */
  rotateOnAxis(axis, angle) {
    _tmpQuat.setFromAxisAngle(axis, angle);
    this.quaternion.multiply(_tmpQuat);
    this.dirtyWorld = true;
    return this;
  }

  /**
   * Translate along a local axis by distance in units.
   * @param {Vec3} axis
   * @param {number} distance
   * @returns {this}
   */
  translateOnAxis(axis, distance) {
    _tmpVec.copy(axis).applyQuaternion(this.quaternion);
    this.position.add(_tmpVec.multiplyScalar(distance));
    this.dirtyWorld = true;
    return this;
  }

  // ============================================================
  // Lookup & metadata
  // ============================================================

  /**
   * Find a descendant by UUID.
   * @param {string} uuid
   * @returns {Node|undefined}
   */
  findByUUID(uuid) {
    if (this.uuid === uuid) return this;
    for (const child of this.children.values()) {
      const found = child.findByUUID(uuid);
      if (found) return found;
    }
    return undefined;
  }

  /**
   * Find the first descendant by name.
   * @param {string} name
   * @returns {Node|undefined}
   */
  findByName(name) {
    if (this.name === name) return this;
    for (const child of this.children.values()) {
      const found = child.findByName(name);
      if (found) return found;
    }
    return undefined;
  }

  /**
   * Set metadata (engine-agnostic).
   * @param {string} key
   * @param {any} value
   */
  setMeta(key, value) {
    this.metaStore.set(key, value);
  }

  /**
   * Get metadata by key.
   * @param {string} key
   * @returns {any}
   */
  getMeta(key) {
    return this.metaStore.get(key);
  }

  // ============================================================
  // Serialization (DSRT schema, not Three.js)
  // ============================================================

  /**
   * Serialize node to DSRT schema.
   * - Captures identity, transforms, traits, layers, children
   * - Omits renderer-specific runtime caches
   * @returns {object}
   */
  toJSON() {
    const obj = {
      uuid: this.uuid,
      type: this.type,
      name: this.name || undefined,
      traits: { ...this.renderTraits },
      layers: this.layers.mask,
      localMatrix: this.localMatrix.toArray(),
      worldMatrix: this.worldMatrix.toArray(),
      position: this.position.toArray(),
      quaternion: this.quaternion.toArray(),
      scale: this.scale.toArray(),
      meta: Object.fromEntries(this.metaStore),
      animations: this.animations.map(a => (a && a.uuid) ? a.uuid : undefined).filter(Boolean),
      children: []
    };

    for (const child of this.children.values()) {
      obj.children.push(child.toJSON());
    }

    return obj;
  }
}
