# test_pipeline_text_to_3d.py
# Integration test for TextTo3D pipeline

import pytest
from src.core.pipelines.TextTo3D import TextTo3D
from src.core.models.BaseModel import InferParams

def test_text_to_3d_pipeline_runs():
    pipeline = TextTo3D()
    params = InferParams(resolution=(128,128), output_format="glb")
    mesh = pipeline.run("tree", params)
    assert "mesh" in mesh
