import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
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
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
