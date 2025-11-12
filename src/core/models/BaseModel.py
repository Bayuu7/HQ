# BaseModel.py
# Abstract base class for AI models

from abc import ABC, abstractmethod

class BaseModel(ABC):
    def __init__(self, name: str, use_gpu: bool = True, debug: bool = False):
        self.name = name
        self.use_gpu = use_gpu      # Boolean flag: True if GPU should be used
        self.debug = debug          # Boolean flag: True if debug logging is enabled
        self.is_trained = False     # Boolean flag: True if model has been trained

    @abstractmethod
    def train(self, dataset_path: str):
        """Train the model on a dataset"""
        pass

    @abstractmethod
    def infer(self, prompt: str, **kwargs):
        """Run inference given a prompt"""
        pass
