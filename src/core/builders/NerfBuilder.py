# NerfBuilder.py
# Builder for NeRF-based 3D models

class NerfBuilder:
    def __init__(self, optimize=True):
        self.optimize = optimize

    def build(self, artifact):
        return {
            "type": "nerf",
            "optimized": self.optimize,
            "content": artifact.get("content", ""),
        }
