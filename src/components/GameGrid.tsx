import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GamesCardSkeleton from "./GamesCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  const recordsFetched =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <Text>{error.message}</Text>;
  return !hasNextPage && games?.pages[0].next === null && !isLoading ? (
    <Heading paddingLeft={2} marginTop={5}>
      No Games Found !
    </Heading>
  ) : (
    <InfiniteScroll
      dataLength={recordsFetched}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <Heading marginY={20}>Yay! You have seen it all !!!</Heading>
        </p>
      }
    >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
