import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GamesCardSkeleton from "./GamesCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log("Games are ", games);
  if (error) return <Text>{error.message}</Text>;
  return !hasNextPage && games?.pages[0].next === null && !isLoading ? (
    <Heading paddingLeft={2} marginTop={5}>
      No Games Found !
    </Heading>
  ) : (
    <Box padding={2}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          cards.map((card) => (
            <GameCardContainer key={card}>
              <GamesCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.pages.map((page) => (
          <React.Fragment>
            {page.results.map((g) => (
              <GameCardContainer key={g.id}>
                <GameCard game={g}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button marginY="25px" onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
