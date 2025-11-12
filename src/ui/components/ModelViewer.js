// ModelViewer.js
// React component to display 3D models

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function ModelViewer({ modelUrl }) {
  const ref = useRef();

  useEffect(() => {
    if (modelUrl) {
      console.log("[INFO] Loading model:", modelUrl);
    }
  }, [modelUrl]);

  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      {/* TODO: Load GLTF/GLB model from modelUrl */}
    </Canvas>
  );
}
