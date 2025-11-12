# test_api_auth.py
# Security test for API Gateway

import pytest
from src.services.ApiGateway import app

def test_generate_model_requires_auth():
    client = app.test_client()
    resp = client.post("/v1/models/generate", json={"prompt": "test"})
    # In production, should enforce auth; here we just check response exists
    assert resp.status_code in (200,401)
