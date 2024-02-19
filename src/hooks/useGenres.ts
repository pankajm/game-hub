import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
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
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenre;
