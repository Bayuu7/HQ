// DSRT Engine – Core LayerMask Type Definitions
// Provides type contracts for the LayerMask class with modern DSRT naming and style.

export class LayerMask {
  /** Internal mask value (32-bit integer, default: only layer 0 enabled) */
  mask: number;

  // ============================================================
  // Core API
  // ============================================================

  /** Enable a specific layer bit (0–31) */
  enable(layer: number): void;

  /** Disable a specific layer bit (0–31) */
  disable(layer: number): void;

  /** Toggle a specific layer bit (0–31) */
  toggle(layer: number): void;

  /** Check if a specific layer bit is enabled */
  has(layer: number): boolean;

  /** Set mask to only one layer (0–31) */
  set(layer: number): void;

  /** Reset mask to default (only layer 0 enabled) */
  reset(): void;

  // ============================================================
  // Comparison API
  // ============================================================

  /** Test overlap with another LayerMask */
  test(other: LayerMask): boolean;

  /** Copy mask from another LayerMask */
  copy(other: LayerMask): void;

  /** Clone this LayerMask */
  clone(): LayerMask;

  // ============================================================
  // Serialization
  // ============================================================

  /** Serialize mask to JSON (integer) */
  toJSON(): number;
}
