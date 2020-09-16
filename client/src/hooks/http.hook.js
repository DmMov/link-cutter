import { useState, useCallback } from 'react';
import axios from 'axios';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'get', data = null, headers = {}) => {
    setLoading(true)
    try {
      const response = await axios({ url, method, data, headers })
        .then(response => response)
        .catch(error => error.response);

      if (response.status >= 400)
        throw new Error(response.data || "Something went wrong");

      setLoading(false);

      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err);
      throw err;
    }
  }, []);

  const clearError = () => useCallback(() => setError(null), []);

  return { loading, error, request, clearError };
}