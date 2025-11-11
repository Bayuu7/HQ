// ConstantsDebugMap.js — DSRT Core Module for debug constant mappings
// Author: DSRT
// Version: 2025.11.0
// Description:
// Provides lookup table for debug constants used in overlays, diagnostics, and developer tools.
// Maps debug keys to labels, colors, icons, and scopes.
// Read-only registry-style module with introspection support.

const ConstantsDebugMap = (() => {
  // Internal debug map (key → descriptor object)
  const _map = new Map([
    ['TRANSFORM_DIRTY', { label: 'Transform Dirty', color: '#ffcc00', icon: '⚠️', scope: 'transform' }],
    ['BOUND_DIRTY', { label: 'Bounds Dirty', color: '#ff6666', icon: '📐', scope: 'bounds' }],
    ['OVERLAY_ACTIVE', { label: 'Overlay Active', color: '#66ccff', icon: '🖥️', scope: 'overlay' }],
    ['PLUGIN_LOADED', { label: 'Plugin Loaded', color: '#99ff99', icon: '🔌', scope: 'plugin' }],
    ['LIFECYCLE_TRIGGERED', { label: 'Lifecycle Triggered', color: '#ccccff', icon: '⏱️', scope: 'lifecycle' }]
    // Add more mappings as needed
  ]);

  // Boolean flags for introspection and audit
  let _isFrozen = true;      // Immutable by design
  let _isDirty = false;      // Never mutates
  let _isValid = true;       // Indicates structural integrity

  // === RETRIEVAL METHODS ===

  /**
   * Retrieves debug descriptor object by key.
   * Returns descriptor if found, or null if missing.
   * @param {string} key
   * @returns {Object|null}
   */
  function get(key) {
    return _map.has(key) ? _map.get(key) : null;
  }

  /**
   * Checks if a debug key exists in the map.
   * Returns true if present, false otherwise.
   * @param {string} key
   * @returns {boolean}
   */
  function has(key) {
    return _map.has(key);
  }

  /**
   * Returns all debug keys as an array.
   * Useful for overlay iteration or diagnostics.
   * @returns {string[]}
   */
  function keys() {
    return Array.from(_map.keys());
  }

  /**
   * Returns a deep clone of the entire debug map.
   * Useful for rendering overlays or exporting diagnostics.
   * @returns {Object}
   */
  function snapshot() {
    const obj = Object.fromEntries(_map.entries());
    return JSON.parse(JSON.stringify(obj));
  }

  // === INTROSPECTION ===

  /**
   * Returns introspection data about the debug map.
   * Includes total keys, frozen state, and validity.
   * @returns {Object}
   */
  function getStats() {
    return {
      total: _map.size,
      isFrozen: _isFrozen,
      isDirty: _isDirty,
      isValid: _isValid
    };
  }

  // === FLOW CONTROL (NO-OP) ===

  function freeze() {
    _isFrozen = true;
  }

  function unfreeze() {
    _isFrozen = true;
  }

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

export default ConstantsDebugMap;
