import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={2}>
        {games.map((g) => (
          <GameCard key={g.id} game={g}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
