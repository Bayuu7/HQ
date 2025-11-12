// PromptInput.js (update dengan login + token)

import React, { useState } from 'react';
import useApi from '../hooks/useApi';

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [userId, setUserId] = useState("guest");
  const { login, generateModel, loading, error } = useApi("http://localhost:5000");

  const handleLogin = async () => {
    const token = await login(userId);
    console.log("[INFO] Logged in, token:", token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const job = await generateModel(prompt);
    console.log("[INFO] Job response:", job);
  };

  return (
    <div>
      <h3>Prompt Input</h3>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <button onClick={handleLogin}>Login</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit" disabled={loading}>Generate</button>
      </form>

      {error && <p style={{color:"red"}}>Error: {error.message}</p>}
    </div>
  );
}
