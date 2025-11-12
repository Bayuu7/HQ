# client.py (update dengan auth)

import requests

class MeshyClient:
    def __init__(self, base_url="http://localhost:5000", debug=False):
        self.base_url = base_url
        self.debug = debug
        self.token = None

    def login(self, user_id="guest"):
        resp = requests.post(f"{self.base_url}/v1/auth/login", json={"user_id": user_id})
        data = resp.json()
        self.token = data.get("token")
        if self.debug:
            print(f"[DEBUG] Logged in, token: {self.token}")
        return self.token

    def _headers(self):
        if not self.token:
            raise Exception("Not authenticated. Call login() first.")
        return {"Authorization": f"Bearer {self.token}"}

    def generate_model(self, prompt: str):
        if self.debug:
            print(f"[DEBUG] Sending prompt: {prompt}")
        resp = requests.post(f"{self.base_url}/v1/models/generate", json={"prompt": prompt}, headers=self._headers())
        return resp.json()
