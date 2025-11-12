#!/bin/bash
# run_tests.sh
# Run all test suites

pytest tests/unit
pytest tests/integration
pytest tests/performance
pytest tests/security
