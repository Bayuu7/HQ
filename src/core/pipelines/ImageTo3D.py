# ImageTo3D.py
# Pipeline: image input → 3D mesh (NeRF)

from src/core/models.NerfModel import NerfModel
from src/core/builders.NerfBuilder import NerfBuilder
from src/core/models.BaseModel import InferParams

class ImageTo3D:
    def __init__(self, use_gpu=True, debug=False):
        self.model = NerfModel(use_gpu=use_gpu, debug=debug)
        self.builder = NerfBuilder()

    def run(self, prompt: str, params: InferParams):
        self.model.train("dataset_stub")
        artifact = self.model.infer(prompt, resolution=params.resolution)
        mesh = self.builder.build(artifact)
        return mesh
