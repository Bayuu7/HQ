# BaseAnimation.py
# Base class for character animations

class BaseAnimation:
    def __init__(self, loop: bool = True, debug: bool = False

########################################
# ANIMATION
########################################
cat > src/core/animation/BaseAnimation.py <<'EOF'
# BaseAnimation.py
# Base class for character animations

class BaseAnimation:
    def __init__(self, loop: bool = True, debug: bool = False):
        self.loop = loop    # Boolean flag: True if animation should loop
        self.debug = debug  # Boolean flag: True if debug logging is enabled

    def play(self, action: str):
        if self.debug:
            print(f"[DEBUG] Playing animation: {action}")
        return f"Animation '{action}' played"
