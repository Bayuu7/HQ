# VoxelBuilder.py
# Builder for voxel-based 3D models

class VoxelBuilder:
    def __init__(self, resolution=64, optimize=True):
        self.resolution = resolution
        self.optimize = optimize

    def build(self, artifact):
        return {
            "type": "voxel",
            "resolution": self.resolution,
            "optimized": self.optimize,
            "content": artifact.get("content", ""),
        }
