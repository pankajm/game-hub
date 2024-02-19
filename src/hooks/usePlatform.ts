import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ms from "ms";
import HttpClient from "../services/http-client";
const httpClient = new HttpClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: httpClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatform;
