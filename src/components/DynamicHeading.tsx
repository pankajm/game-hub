import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const DynamicHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatform();

  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  return (
    <Text as="b" fontSize="5xl">
      {platform?.name} {genre?.name} Games
    </Text>
  );
};

export default DynamicHeading;
