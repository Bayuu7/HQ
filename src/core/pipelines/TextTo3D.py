# TextTo3D.py
# Pipeline: text prompt → 3D mesh

from src/core/models.DiffusionModel import DiffusionModel
from src/core/builders.MeshBuilder import MeshBuilder
from src/core/models.BaseModel import InferParams

class TextTo3D:
    def __init__(self, use_gpu=True, debug=False):
        self.model = DiffusionModel(use_gpu=use_gpu, debug=debug)
        self.builder = MeshBuilder(optimize=True)

    def run(self, prompt: str, params: InferParams):
        self.model.train("dataset_stub")
        artifact = self.model.infer(prompt, resolution=params.resolution)
        mesh = self.builder.build(artifact)
        return mesh
