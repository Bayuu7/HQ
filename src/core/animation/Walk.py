# Walk.py
# Walk animation

from src/core/animation/BaseAnimation import BaseAnimation

class Walk(BaseAnimation):
    def play(self):
        return super().play("walk")
