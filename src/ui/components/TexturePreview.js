// TexturePreview.js
// React component to preview textures

import React from 'react';

export default function TexturePreview({ textureUrl }) {
  return (
    <div>
      <h3>Texture Preview</h3>
      {textureUrl ? (
        <img src={textureUrl} alt="Texture preview" style={{ maxWidth: "300px" }} />
      ) : (
        <p>No texture loaded</p>
      )}
    </div>
  );
}
