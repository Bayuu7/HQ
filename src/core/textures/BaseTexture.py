# BaseTexture.py
# Base class for texture generation

class BaseTexture:
    def __init__(self, resolution=(1024, 1024), pbr_enabled=True):
        self.resolution = resolution
        self.pbr_enabled = pbr_enabled  # Boolean flag: True if PBR maps should be generated

    def generate(self, prompt: str):
        return {"texture": f"Texture generated from '{prompt}'"}
