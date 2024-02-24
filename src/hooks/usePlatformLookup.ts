import useGameQueryStore from "../store";
import usePlatform from "./usePlatform";

const usePlatformLookup = () => {
  const { data: platforms } = usePlatform();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  return platforms?.results?.find((platform) => platform.id === platformId);
};

export default usePlatformLookup;
