import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
import HttpClient from "../services/http-client";
import { Genre } from "../entities/Genre";

const httpClient = new HttpClient<Genre>("/genres");

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: httpClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenre;
