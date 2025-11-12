# test_builders.py
# Unit tests for builders

import pytest
from src.core.builders.MeshBuilder import MeshBuilder

def test_mesh_builder_optimizes():
    builder = MeshBuilder(optimize=True)
    result = builder.build({"mesh": "raw"})
    assert result["mesh"] == "Optimized 3D mesh"
