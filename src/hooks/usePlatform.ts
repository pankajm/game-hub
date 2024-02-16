import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import httpClient from "../services/http-client";
import { FetchResponse } from "../services/http-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      httpClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
