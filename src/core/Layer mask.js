// DSRT Engine – Core LayerMask
// Provides a bitmask system for controlling visibility and filtering between nodes and cameras.

export class LayerMask {
  /**
   * LayerMask is a 32-bit integer mask.
   * Each bit represents membership in a layer (0–31).
   * Nodes and cameras can use this mask to filter visibility.
   */
  constructor() {
    /** Internal mask value (default: only layer 0 enabled) */
    this.mask = 1;
  }

  // ============================================================
  // Core API
  // ============================================================

  /**
   * Enable a specific layer bit.
   * @param {number} layer - Layer index (0–31)
   */
  enable(layer) {
    this.mask |= (1 << layer);
  }

  /**
   * Disable a specific layer bit.
   * @param {number} layer - Layer index (0–31)
   */
  disable(layer) {
    this.mask &= ~(1 << layer);
  }

  /**
   * Toggle a specific layer bit.
   * @param {number} layer - Layer index (0–31)
   */
  toggle(layer) {
    this.mask ^= (1 << layer);
  }

  /**
   * Check if a specific layer bit is enabled.
   * @param {number} layer - Layer index (0–31)
   * @returns {boolean}
   */
  has(layer) {
    return (this.mask & (1 << layer)) !== 0;
  }

  /**
   * Set mask to only one layer.
   * @param {number} layer - Layer index (0–31)
   */
  set(layer) {
    this.mask = (1 << layer);
  }

  /**
   * Reset mask to default (only layer 0 enabled).
   */
  reset() {
    this.mask = 1;
  }

  // ============================================================
  // Comparison API
  // ============================================================

  /**
   * Test overlap with another LayerMask.
   * @param {LayerMask} other
   * @returns {boolean} true if any common layer is enabled
   */
  test(other) {
    return (this.mask & other.mask) !== 0;
  }

  /**
   * Copy mask from another LayerMask.
   * @param {LayerMask} other
   */
  copy(other) {
    this.mask = other.mask;
  }

  /**
   * Clone this LayerMask.
   * @returns {LayerMask}
   */
  clone() {
    const lm = new LayerMask();
    lm.mask = this.mask;
    return lm;
  }

  // ============================================================
  // Serialization
  // ============================================================

  /**
   * Serialize mask to JSON (integer).
   * @returns {number}
   */
  toJSON() {
    return this.mask;
  }
}
