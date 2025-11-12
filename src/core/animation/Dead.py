# Dead.py
# Dead animation

from src/core/animation/BaseAnimation import BaseAnimation

class Dead(BaseAnimation):
    def play(self):
        return super().play("dead")
