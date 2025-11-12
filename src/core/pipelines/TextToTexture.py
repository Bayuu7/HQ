# TextToTexture.py
# Pipeline: text prompt → PBR texture maps

from src/core/textures.BaseTexture import BaseTexture, TextureParams

class TextToTexture:
    def __init__(self, pbr_enabled=True):
        self.texture_gen = BaseTexture(pbr_enabled=pbr_enabled)

    def run(self, prompt: str, params: TextureParams):
        texture = self.texture_gen.generate(prompt)
        return texture
