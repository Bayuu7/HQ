# test_inference_speed.py
# Performance test for inference worker

import time
from src.services.InferenceWorker import InferenceWorker

def test_inference_completes_under_threshold():
    worker = InferenceWorker(debug=True)
    start = time.time()
    result = worker.run_job("fast test")
    duration = time.time() - start
    assert duration < 2.0  # seconds
    assert result["status"] == "completed"
