# Normal.py
# Normal map generator

from src/core/textures.BaseTexture import BaseTexture

class Normal(BaseTexture):
    def generate(self, prompt: str):
        base = super().generate(prompt)
        base["channel"] = "normal"
        return base
