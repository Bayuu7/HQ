#!/bin/bash
# dev_server.sh
# Run API Gateway in development mode

export DEBUG=true
export USE_GPU=false
python src/services/ApiGateway.py
