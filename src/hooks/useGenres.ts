// import genres from "../data/genres";

import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import HttpClient from "../services/http-client";

const httpClient = new HttpClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: httpClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenre;
