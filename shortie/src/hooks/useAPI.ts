import { useEffect, useState } from 'react';

interface DataI {
  errors: {
    errorCode: string;
    errorMessage: string;
  };
  data: DataURLI;
}

interface DataURLI {
  title: string | null;
  shortUrl: string;
  originalUrl: string;
  totalClicks: number;
  createdAt: string;
  updatedAt: string;
}

const useAPI = (url: string) => {
  const [dataURL, setDataURL] = useState<DataURLI | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          originalUrl: url
        })
      };
      fetch('https://api.urlo.in/api/short-url', requestOptions)
        .then((response) => response.json())
        .then((data: DataI) => {
          setLoading(false);
          setDataURL(data.data);
        });
    }
  }, [url]);

  return {
    loading,
    data: dataURL
  };
};

export default useAPI;
