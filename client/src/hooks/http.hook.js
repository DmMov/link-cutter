import { useState, useCallback } from 'react';
import { get } from 'js-cookie';
import axios from 'axios';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'get', data = null, headers = {}) => {
    setLoading(true)
    try {
      headers = tokenToHeaders(headers);
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

const tokenToHeaders = headers => {
  const token = get('token');

  if (token)
    headers['Authorization'] = `Bearer ${token}`;

  return headers;
}