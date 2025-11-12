# client_py.py
# Example usage of Python SDK

from src.clients.py.client import MeshyClient

if __name__ == "__main__":
    client = MeshyClient(debug=True)
    job = client.generate_model("castle")
    print("Job response:", job)
