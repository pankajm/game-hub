import usePlatform from "./usePlatform";

const usePlatformLookup = (platformId?: number) => {
  const { data: platforms } = usePlatform();
  return platforms?.results.find((platform) => platform.id === platformId);
};

export default usePlatformLookup;
