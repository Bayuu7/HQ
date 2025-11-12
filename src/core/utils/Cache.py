# Cache.py
# Simple in-memory cache with TTL

import time

class Cache:
    def __init__(self, ttl=3600):
        self.ttl = ttl
        self.store = {}

    def set(self, key, value):
        self.store[key] = {"value": value, "ts": time.time()}

    def get(self, key):
        record = self.store.get(key)
        if not record:
            return None
        if time.time() - record["ts"] > self.ttl:
            del self.store[key]
            return None
        return record["value"]
