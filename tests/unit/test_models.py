# test_models.py
# Unit tests for core models

import pytest
from src.core.models.DiffusionModel import DiffusionModel

def test_diffusion_infer_returns_mesh():
    model = DiffusionModel(debug=True)
    result = model.infer("test prompt")
    assert "mesh" in result
    assert "Generated 3D model" in result["mesh"]
