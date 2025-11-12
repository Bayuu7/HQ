// AnimationPlayer.js
// React component to play animations

import React, { useState } from 'react';

export default function AnimationPlayer({ animations }) {
  const [current, setCurrent] = useState(null);
  const [loop, setLoop] = useState(true); // Boolean flag: loop animation

  const play = (anim) => {
    setCurrent(anim);
    console.log("[INFO] Playing animation:", anim, "Loop:", loop);
  };

  return (
    <div>
      <h3>Animation Player</h3>
      <ul>
        {animations.map((anim) => (
          <li key={anim}>
            <button onClick={() => play(anim)}>{anim}</button>
          </li>
        ))}
      </ul>
      {current && <p>Now playing: {current}</p>}
    </div>
  );
}
