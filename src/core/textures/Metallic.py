# Metallic.py
# Metallic map generator

from src/core/textures.BaseTexture import BaseTexture

class Metallic(BaseTexture):
    def generate(self, prompt: str):
        base = super().generate(prompt)
        base["channel"] = "metallic"
        return base
