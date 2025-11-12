# Logger.py
# Simple logger with debug flag

import time

class Logger:
    def __init__(self, service: str, debug: bool = False):
        self.service = service
        self.debug = debug

    def log(self, level: str, msg: str, **fields):
        ts = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        payload = {"ts": ts, "service": self.service, "level": level, "msg": msg, **fields}
        print(payload)

    def info(self, msg: str, **fields):
        self.log("INFO", msg, **fields)

    def warn(self, msg: str, **fields):
        self.log("WARN", msg, **fields)

    def error(self, msg: str, **fields):
        self.log("ERROR", msg, **fields)

    def debug_log(self, msg: str, **fields):
        if self.debug:
            self.log("DEBUG", msg, **fields)
