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
        //I have passed the API key directly in the link since you will be testing this code locally. Normally, I include this kind of confidential data in an environment file and access it from there.
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=9bc02f12&${query}`
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
