import { Box, Grid, GridItem, HStack, Hide, Show } from "@chakra-ui/react";
import { useState } from "react";
import DynamicHeading from "./components/DynamicHeading";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import GenreSelector from "./components/GenreSelector";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
  page: number;
  page_size: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreCLick = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genreId: genre.id });
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText: string) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onGenreClick={handleGenreCLick}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2} marginTop={3}>
          <DynamicHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={4} marginTop={2}>
            <Hide above="lg">
              <GenreSelector
                selectedGenreId={gameQuery.genreId}
                onGenreSelect={handleGenreCLick}
              ></GenreSelector>
            </Hide>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onPlatformSelect={(platform: Platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              onSortClick={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
