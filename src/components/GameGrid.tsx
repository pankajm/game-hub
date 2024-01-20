import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GamesCardSkeleton from "./GamesCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding={2}>
        {isLoading &&
          cards.map((card) => (
            <GameCardContainer key={card}>
              <GamesCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard game={g}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
