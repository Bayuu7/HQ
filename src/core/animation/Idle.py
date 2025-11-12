# Idle.py
# Idle animation

from src/core/animation/BaseAnimation import BaseAnimation

class Idle(BaseAnimation):
    def play(self):
        return super().play("idle")
