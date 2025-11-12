// PromptInput.js
// React component for text prompt input

import React, { useState } from 'react';

export default function PromptInput({ onSubmit }) {
  const [prompt, setPrompt] = useState("");
  const [debug, setDebug] = useState(false); // Boolean flag: enable debug mode

  const handleSubmit = (e) => {
    e.preventDefault();
    if (debug) console.log("[DEBUG] Submitting prompt:", prompt);
    onSubmit(prompt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
      />
      <button type="submit">Generate</button>
    </form>
  );
}
