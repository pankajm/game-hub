import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GamesCardSkeleton from "./GamesCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding={2}>
        {isLoading &&
          cards.map((card) => (
            <GameCardContainer>
              <GamesCardSkeleton key={card} />
            </GameCardContainer>
          ))}
        {games.map((g) => (
          <GameCardContainer>
            <GameCard key={g.id} game={g}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
