import { useState, useEffect } from "react";

const useMovies = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        //I have stored api key in the env file for security purpose
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&${query}`
        );
        const result = await response.json();

        if (result.Response === "false") {
          throw new Error(result.Error);
        }
        setData(result.Search || result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query]);

  return { data, loading, error };
};

export default useMovies;
