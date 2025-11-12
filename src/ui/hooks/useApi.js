// useApi.js
// Custom React hook for API calls

import { useState } from 'react';

export default function useApi(baseUrl = "http://localhost:5000") {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateModel = async (prompt) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(`${baseUrl}/v1/models/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  return { generateModel, loading, error };
}
