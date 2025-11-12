# client.py
# Python SDK client for Meshy-like API

import requests

class MeshyClient:
    def __init__(self, base_url="http://localhost:5000", debug=False):
        self.base_url = base_url
        self.debug = debug  # Boolean flag: enable debug logging

    def generate_model(self, prompt: str):
        if self.debug:
            print(f"[DEBUG] Sending prompt: {prompt}")
        resp = requests.post(f"{self.base_url}/v1/models/generate", json={"prompt": prompt})
        return resp.json()

    def get_job_status(self, job_id: str):
        if self.debug:
            print(f"[DEBUG] Checking job status: {job_id}")
        resp = requests.get(f"{self.base_url}/v1/jobs/{job_id}")
        return resp.json()

    def get_asset(self, asset_id: str):
        if self.debug:
            print(f"[DEBUG] Retrieving asset: {asset_id}")
        resp = requests.get(f"{self.base_url}/v1/assets/{asset_id}")
        return resp.json()
