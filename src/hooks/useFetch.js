import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("error while fetching data", error);
        setIsError(true);
        setData({ errorMessage: error });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
    isError,
  };
};

export default useFetch;
