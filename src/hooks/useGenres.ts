// import genres from "../data/genres";

import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/http-client";
import { FetchResponse } from "../services/http-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const fetchGenre = () => {
    return apiClient
      .get<FetchResponse<Genre>>("/genres")
      .then((res) => res.data);
  };

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenre,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenre;
