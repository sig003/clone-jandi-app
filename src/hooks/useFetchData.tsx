import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetchData(url) {
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
	
    (async function() {
      try {
        const res = await axios.get(url);
        const data = await res?.data;
        setApiData([data.userId, data.title]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false)
      }
    })();
  }, [url]);

  return { apiData, loading, error };
}