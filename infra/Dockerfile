# Dockerfile
# Build image for API service

FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src ./src

ENV USE_GPU=false
ENV DEBUG=false

CMD ["python", "src/services/ApiGateway.py"]
