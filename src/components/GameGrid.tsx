import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GamesCardSkeleton from "./GamesCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={2}>
        {isLoading && cards.map((card) => <GamesCardSkeleton key={card} />)}
        {games.map((g) => (
          <GameCard key={g.id} game={g}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
