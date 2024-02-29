import { Box, Grid, Show, GridItem, HStack, Hide } from "@chakra-ui/react";
import DynamicHeading from "../components/DynamicHeading";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import GenreSelector from "../components/GenreSelector";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
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
};

export default HomePage;
