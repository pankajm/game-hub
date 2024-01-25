import { useState } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
import DynamicHeading from "./components/DynamicHeading";

export interface GameQuery {
  genre: Genre;
  platform: Platform;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreCLick = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
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
            selectedGenre={gameQuery.genre}
            onGenreClick={handleGenreCLick}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2} marginTop={3}>
          <DynamicHeading
            genre={gameQuery.genre?.name}
            platform={gameQuery.platform?.name}
          />
          <HStack spacing={5} marginBottom={4} marginTop={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onPlatformSelect={(platform: Platform) =>
                setGameQuery({ ...gameQuery, platform })
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
