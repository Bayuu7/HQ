// useApi.js (update dengan login + token)

import { useState } from 'react';

export default function useApi(baseUrl = "http://localhost:5000") {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (userId = "guest") => {
    try {
      const resp = await fetch(`${baseUrl}/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId }),
      });
      const data = await resp.json();
      setToken(data.token);
      return data.token;
    } catch (err) {
      setError(err);
      return null;
    }
  };

  const generateModel = async (prompt) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(`${baseUrl}/v1/models/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await resp.json();
      return data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, generateModel, loading, error };
}
