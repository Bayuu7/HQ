# text_to_3d.py
# Example usage of TextTo3D pipeline

from src.core.pipelines.TextTo3D import TextTo3D
from src.core.models.BaseModel import InferParams

if __name__ == "__main__":
    pipeline = TextTo3D()
    params = InferParams(resolution=(256,256), output_format="glb")
    mesh = pipeline.run("a medieval sword", params)
    print("Generated mesh:", mesh)
