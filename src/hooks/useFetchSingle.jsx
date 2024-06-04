import { useState, useEffect } from "react";

function useFetchSingle(apiUrl, id) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getData(url) {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setIsError(true);
        }
      }

      setIsLoading(false);
    }

    getData(`${apiUrl}/${id}`);

    return () => {
      controller.abort();
    };
  }, [apiUrl, id]);

  return {
    data,
    isLoading,
    isError,
  };
}

export { useFetchSingle };
