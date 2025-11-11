// Constants.js — DSRT Core Module for universal constants
// Author: DSRT
// Version: 2025.11.0
// Description:
// Provides access to immutable constants used across DSRT runtime.
// Registry-style read-only module with introspection and audit support.
// Constants are frozen at runtime and cannot be mutated externally.

const Constants = (() => {
  // Internal constant map (key → value)
  const _constants = new Map([
    ['VERSION', '2025.11.0'],
    ['ENGINE_NAME', 'dsrt-engine'],
    ['AUTHOR', 'DSRT'],
    ['DEFAULT_LANGUAGE', 'en'],
    ['DEFAULT_UNIT', 'world'],
    ['DEFAULT_LAYER', 'base'],
    ['DEFAULT_PLUGIN_SCOPE', 'global']
    // Add more constants as needed
  ]);

  // Boolean flags for introspection and audit
  let _isFrozen = true;      // Constants are immutable by design
  let _isDirty = false;      // Constants never mutate, always false
  let _isValid = true;       // Indicates structural integrity of constant map

  // === RETRIEVAL METHODS ===

  /**
   * Retrieves a constant value by key.
   * Returns the value if found, or null if missing.
   * @param {string} key
   * @returns {*}
   */
  function get(key) {
    return _constants.has(key) ? _constants.get(key) : null;
  }

  /**
   * Checks if a constant key exists.
   * Returns true if present, false otherwise.
   * @param {string} key
   * @returns {boolean}
   */
  function has(key) {
    return _constants.has(key);
  }

  /**
   * Returns all constant keys as an array.
   * Useful for iteration, overlay, or validation.
   * @returns {string[]}
   */
  function keys() {
    return Array.from(_constants.keys());
  }

  /**
   * Returns a deep clone of all constants as a plain object.
   * Useful for overlay rendering or export.
   * @returns {Object}
   */
  function snapshot() {
    const obj = Object.fromEntries(_constants.entries());
    return JSON.parse(JSON.stringify(obj));
  }

  // === INTROSPECTION ===

  /**
   * Returns introspection data about the constant system.
   * Includes total keys, frozen state, and validity.
   * @returns {Object}
   */
  function getStats() {
    return {
      total: _constants.size,
      isFrozen: _isFrozen,
      isDirty: _isDirty,
      isValid: _isValid
    };
  }

  // === FLOW CONTROL (NO-OP) ===

  /**
   * Freezing is enforced by design. This method is a no-op.
   */
  function freeze() {
    _isFrozen = true;
  }

  /**
   * Unfreezing is not allowed. This method is a no-op.
   */
  function unfreeze() {
    _isFrozen = true;
  }

  /**
   * Returns current frozen state.
   * Always true for Constants.
   * @returns {boolean}
   */
  function isFrozen() {
    return _isFrozen;
  }

  // === PUBLIC API ===

  return Object.freeze({
    get,
    has,
    keys,
    snapshot,
    getStats,
    freeze,
    unfreeze,
    isFrozen
  });
})();

export default Constants;
