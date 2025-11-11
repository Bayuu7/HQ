// ConstantsMeta.js — DSRT Core Module for metadata constants
// Author: DSRT
// Version: 2025.11.0
// Description:
// Provides constant keys and descriptors used for metadata tagging and classification.
// Includes meta types, scopes, labels, and categories for system introspection and export.
// Read-only registry-style module with introspection support.

const ConstantsMeta = (() => {
  // Internal metadata constant map (key → descriptor string)
  const _map = new Map([
    ['META_TYPE_SYSTEM', 'system'],
    ['META_TYPE_PLUGIN', 'plugin'],
    ['META_TYPE_ENTITY', 'entity'],
    ['META_TYPE_OVERLAY', 'overlay'],
    ['META_TYPE_LIFECYCLE', 'lifecycle'],
    ['META_SCOPE_GLOBAL', 'global'],
    ['META_SCOPE_LOCAL', 'local'],
    ['META_SCOPE_RUNTIME', 'runtime'],
    ['META_SCOPE_DEBUG', 'debug'],
    ['META_LABEL_CORE', 'core'],
    ['META_LABEL_USER', 'user'],
    ['META_LABEL_INTERNAL', 'internal'],
    ['META_CATEGORY_ENGINE', 'engine'],
    ['META_CATEGORY_MODULE', 'module'],
    ['META_CATEGORY_EXPORT', 'export']
    // Add more metadata constants as needed
  ]);

  // === RETRIEVAL METHODS ===

  /**
   * Retrieves metadata constant value by key.
   * Returns the value if found, or null if missing.
   * @param {string} key
   * @returns {string|null}
   */
  function get(key) {
    return _map.has(key) ? _map.get(key) : null;
  }

  /**
   * Checks if a metadata key exists.
   * Returns true if present, false otherwise.
   * @param {string} key
   * @returns {boolean}
   */
  function has(key) {
    return _map.has(key);
  }

  /**
   * Returns all metadata keys as an array.
   * Useful for export, overlay, or validation.
   * @returns {string[]}
   */
  function keys() {
    return Array.from(_map.keys());
  }

  /**
   * Returns a deep clone of all metadata constants.
   * Useful for overlay rendering or export.
   * @returns {Object}
   */
  function snapshot() {
    const obj = Object.fromEntries(_map.entries());
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * Returns introspection data about the metadata map.
   * Includes total keys and structural validity.
   * @returns {Object}
   */
  function getStats() {
    return {
      total: _map.size,
      isValid: true
    };
  }

  // === PUBLIC API ===

  return Object.freeze({
    get,
    has,
    keys,
    snapshot,
    getStats
  });
})();

export default ConstantsMeta;
