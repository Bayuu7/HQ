# Roughness.py
# Roughness map generator

from src/core/textures.BaseTexture import BaseTexture

class Roughness(BaseTexture):
    def generate(self, prompt: str):
        base = super().generate(prompt)
        base["channel"] = "roughness"
        return base
