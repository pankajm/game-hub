import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenreLookup from "../hooks/useGenreLookup";
import usePlatformLookup from "../hooks/usePlatformLookup";

interface Props {
  gameQuery: GameQuery;
}

const DynamicHeading = ({ gameQuery }: Props) => {
  const genre = useGenreLookup(gameQuery.genreId);
  const platform = usePlatformLookup(gameQuery.platformId);

  return (
    <Text as="b" fontSize="5xl">
      {platform?.name} {genre?.name} Games
    </Text>
  );
};

export default DynamicHeading;
