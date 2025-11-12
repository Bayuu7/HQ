# Attack.py
# Attack animation

from src/core/animation/BaseAnimation import BaseAnimation

class Attack(BaseAnimation):
    def play(self):
        return super().play("attack")
