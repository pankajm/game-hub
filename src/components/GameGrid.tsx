import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GamesCardSkeleton from "./GamesCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error.message}</Text>;
  return games?.results.length === 0 && !isLoading ? (
    <Heading paddingLeft={2} marginTop={5}>
      No Games Found !
    </Heading>
  ) : (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding={2}
    >
      {isLoading &&
        cards.map((card) => (
          <GameCardContainer key={card}>
            <GamesCardSkeleton />
          </GameCardContainer>
        ))}
      {games?.results.map((g) => (
        <GameCardContainer key={g.id}>
          <GameCard game={g}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
