import { Box, Grid, GridItem, HStack, Hide, Show } from "@chakra-ui/react";
import DynamicHeading from "./components/DynamicHeading";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import GenreSelector from "./components/GenreSelector";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
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
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2} marginTop={3}>
          <DynamicHeading />
          <HStack spacing={5} marginBottom={4} marginTop={2}>
            <Hide above="lg">
              <GenreSelector />
            </Hide>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
