import useGameQueryStore from "../store";
import useGenres from "./useGenres";

const useGenreLookup = () => {
  const { data: genres } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  return genres?.results?.find((genre) => genre.id === genreId);
};

export default useGenreLookup;
