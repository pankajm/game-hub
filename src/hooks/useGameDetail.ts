import { useQuery } from "@tanstack/react-query";
import HttpClient from "../services/http-client";
import ms from "ms";
import { Game } from "../entities/Game";

const httpClient = new HttpClient<Game>(`/games`);

const useGameDetail = (slug: string) => {
  return useQuery({
    queryKey: ["gameDetail", slug],
    queryFn: () => httpClient.get(slug),
    staleTime: ms("24h"),
  });
};

export default useGameDetail;
