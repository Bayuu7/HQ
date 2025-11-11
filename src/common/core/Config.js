// Config.js — DSRT Core Module for global runtime configuration
// Author: DSRT
// Version: 2025.11.0
// Description:
// Stores and manages global configuration values for DSRT runtime.
// Supports mutation, retrieval, snapshot, and introspection.
// Registry-style module with full flag control and audit-ready structure.

const Config = (() => {
  // Internal configuration store: key → value
  const _config = new Map();

  // Boolean flags for introspection and flow control
  let _isFrozen = false;     // Prevents mutation when true
  let _isDirty = false;      // Indicates if config has changed
  let _isValid = true;       // Indicates structural integrity of config data

  // === MUTATION METHODS ===

  function set(key, value) {
    if (_isFrozen || typeof key !== 'string') return false;
    _config.set(key, value);
    _isDirty = true;
    return true;
  }

  function remove(key) {
    if (_isFrozen) return false;
    const success = _config.delete(key);
    if (success) _isDirty = true;
    return success;
  }

  function clear() {
    if (_isFrozen) return false;
    _config.clear();
    _isDirty = false;
    return true;
  }

  // === RETRIEVAL METHODS ===

  function get(key) {
    return _config.has(key) ? _config.get(key) : null;
  }

  function has(key) {
    return _config.has(key);
  }

  function keys() {
    return Array.from(_config.keys());
  }

  function snapshot() {
    const obj = Object.fromEntries(_config.entries());
    return JSON.parse(JSON.stringify(obj));
  }

  // === INTROSPECTION ===

  function getStats() {
    return {
      total: _config.size,
      isDirty: _isDirty,
      isFrozen: _isFrozen,
      isValid: _isValid
    };
  }

  // === FLOW CONTROL ===

  function freeze() {
    _isFrozen = true;
  }

  function unfreeze() {
    _isFrozen = false;
  }

  function isFrozen() {
    return _isFrozen;
  }

  // === PUBLIC API ===

  return Object.freeze({
    set,
    remove,
    clear,
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

export default Config;
