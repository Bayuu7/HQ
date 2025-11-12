// DSRT Engine – Core SignalBus
// Provides a modern event system for DSRT with typed signals and safe listener management.

export class SignalBus {
  constructor() {
    /**
     * Internal registry of listeners.
     * Map: eventName -> Set of handlers
     */
    this._listeners = new Map();
  }

  // ============================================================
  // Listener management
  // ============================================================

  /**
   * Register a handler for a specific event.
   * @param {string} event - Event name
   * @param {Function} handler - Callback function
   */
  on(event, handler) {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, new Set());
    }
    this._listeners.get(event).add(handler);
  }

  /**
   * Register a handler that runs only once.
   * @param {string} event - Event name
   * @param {Function} handler - Callback function
   */
  once(event, handler) {
    const wrapper = (payload) => {
      this.off(event, wrapper);
      handler(payload);
    };
    this.on(event, wrapper);
  }

  /**
   * Remove a handler for a specific event.
   * @param {string} event - Event name
   * @param {Function} handler - Callback function
   */
  off(event, handler) {
    if (this._listeners.has(event)) {
      this._listeners.get(event).delete(handler);
      if (this._listeners.get(event).size === 0) {
        this._listeners.delete(event);
      }
    }
  }

  /**
   * Remove all handlers for a specific event or all events.
   * @param {string} [event] - Optional event name
   */
  clear(event) {
    if (event) {
      this._listeners.delete(event);
    } else {
      this._listeners.clear();
    }
  }

  // ============================================================
  // Dispatch
  // ============================================================

  /**
   * Dispatch an event to all registered handlers.
   * @param {string} event - Event name
   * @param {any} payload - Optional payload data
   */
  dispatch(event, payload) {
    if (!this._listeners.has(event)) return;
    for (const handler of this._listeners.get(event)) {
      try {
        handler(payload);
      } catch (err) {
        console.error(`[SignalBus] Error in handler for event "${event}":`, err);
      }
    }
  }

  // ============================================================
  // Utility
  // ============================================================

  /**
   * Check if any handlers are registered for an event.
   * @param {string} event - Event name
   * @returns {boolean}
   */
  has(event) {
    return this._listeners.has(event);
  }

  /**
   * Count handlers for a specific event.
   * @param {string} event - Event name
   * @returns {number}
   */
  count(event) {
    return this._listeners.has(event) ? this._listeners.get(event).size : 0;
  }
}
