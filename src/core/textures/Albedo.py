# Albedo.py
# Albedo texture generator

from src/core/textures.BaseTexture import BaseTexture

class Albedo(BaseTexture):
    def generate(self, prompt: str):
        base = super().generate(prompt)
        base["channel"] = "albedo"
        return base
