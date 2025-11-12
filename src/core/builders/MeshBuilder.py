# MeshBuilder.py
# Base class for mesh builders

class MeshBuilder:
    def __init__(self, optimize: bool = True):
        self.optimize = optimize  # Boolean flag: True if mesh optimization is enabled

    def build(self, raw_data):
        if self.optimize:
            print("[INFO] Optimizing mesh...")
        return {"mesh": "Optimized 3D mesh"}
