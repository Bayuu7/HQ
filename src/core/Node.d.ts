// DSRT Engine – Core Node Type Definitions
// Provides type contracts for Node class with modern DSRT naming and style.

import { Vec3 } from '../math/Vec3';
import { Quat } from '../math/Quat';
import { Mat4 } from '../math/Mat4';
import { Euler } from '../math/Euler';
import { LayerMask } from './LayerMask';
import { SignalBus } from './SignalBus';

export class Node extends SignalBus {
  /** Stable numeric ID, auto-incremented */
  readonly id: number;

  /** Globally unique identifier string */
  readonly uuid: string;

  /** Human-readable label */
  name: string;

  /** Type string (used for serialization) */
  readonly type: string;

  /** Parent node reference (null if root) */
  parent: Node | null;

  /** Children map keyed by UUID */
  children: Map<string, Node>;

  // ----------------------------
  // Local transform properties
  // ----------------------------

  /** Local position vector */
  position: Vec3;

  /** Local Euler rotation (radians) */
  rotation: Euler;

  /** Local orientation quaternion */
  quaternion: Quat;

  /** Local scale vector */
  scale: Vec3;

  // ----------------------------
  // Transform matrices
  // ----------------------------

  /** Local transform matrix */
  localMatrix: Mat4;

  /** World transform matrix */
  worldMatrix: Mat4;

  // ----------------------------
  // Dirty flag pipeline
  // ----------------------------

  /** Auto-compose local matrix from position/orient/scale */
  autoLocal: boolean;

  /** Auto-inherit world transform from parent */
  inheritWorld: boolean;

  /** Dirty flag indicating worldMatrix needs recomputation */
  dirtyWorld: boolean;

  // ----------------------------
  // Rendering traits
  // ----------------------------

  renderTraits: {
    /** Visibility gate */
    visible: boolean;
    /** Shadow casting behavior */
    shadowCast: boolean;
    /** Shadow receiving behavior */
    shadowRecv: boolean;
    /** Frustum culling flag */
    cullFrustum: boolean;
    /** Manual render order override */
    order: number;
  };

  /** Layer membership mask */
  layers: LayerMask;

  // ----------------------------
  // Animation & metadata
  // ----------------------------

  /** Animation clips attached to this node */
  animations: any[];

  /** MetaStore replaces userData with a typed Map */
  metaStore: Map<string, any>;

  /** Optional custom depth material */
  customDepthMaterial?: any;

  /** Optional custom distance material */
  customDistanceMaterial?: any;

  // ============================================================
  // Transform pipeline
  // ============================================================

  /** Compose localMatrix from position, quaternion, and scale */
  composeLocal(): void;

  /** Sync worldMatrix using parent hierarchy */
  syncHierarchy(): void;

  /** Propagate transform updates through hierarchy */
  propagate(force?: boolean): void;

  // ============================================================
  // Hierarchy management
  // ============================================================

  /** Attach a child node */
  link(child: Node): this;

  /** Detach a child node or self from parent */
  unlink(child?: Node): this;

  /** Remove all children */
  clear(): this;

  /** Traverse node and descendants */
  walk(callback: (node: Node) => void): void;

  // ============================================================
  // Metadata
  // ============================================================

  /** Set metadata key-value pair */
  setMeta(key: string, value: any): void;

  /** Get metadata by key */
  getMeta(key: string): any;

  // ============================================================
  // Lookup
  // ============================================================

  /** Find descendant by UUID */
  findByUUID(uuid: string): Node | undefined;

  /** Find descendant by name */
  findByName(name: string): Node | undefined;

  // ============================================================
  // Serialization
  // ============================================================

  /** Serialize node to DSRT schema */
  toJSON(): object;
}
