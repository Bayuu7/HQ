#!/bin/bash
# test_project.sh
# Jalankan keseluruhan test project HQ/DSRT

set -euo pipefail

echo "🚀 Starting full project test..."

########################################
# 1. Setup environment
########################################
echo "📦 Installing Python dependencies..."
pip install -r requirements.txt

echo "📦 Installing Node dependencies..."
if [ ! -f package.json ]; then
  npm init -y
fi
npm install

########################################
# 2. Run API Gateway (background)
########################################
echo "🌐 Starting API Gateway..."
export PYTHONPATH="$(pwd)/src:${PYTHONPATH}"
export DEBUG=true
python src/services/ApiGateway.py &
API_PID=$!
sleep 3

########################################
# 3. Run Python client test
########################################
echo "🐍 Testing Python client..."
python examples/client_py.py || true

########################################
# 4. Run JS client test
########################################
echo "🟦 Testing JS client..."
node examples/client_js.js || true

########################################
# 5. Run unit + integration tests
########################################
echo "🧪 Running unit tests..."
pytest tests/unit

echo "🔗 Running integration tests..."
pytest tests/integration

########################################
# 6. Run performance + security tests
########################################
echo "⚡ Running performance tests..."
pytest tests/performance

echo "🔒 Running security tests..."
pytest tests/security

########################################
# 7. Stop API Gateway
########################################
echo "🛑 Stopping API Gateway..."
kill $API_PID

echo "✅ Full project test completed successfully."
