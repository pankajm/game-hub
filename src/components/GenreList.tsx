import { HStack, Image, List, ListItem, Text, Tooltip } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenre();
  const genrePlaceholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;
  if (isLoading) {
    return (
      <List>
        {genrePlaceholders.map((genre) => (
          <ListItem paddingBottom="5px" key={genre}>
            <GenreSkeleton />
          </ListItem>
        ))}
      </List>
    );
  }
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Tooltip
              hasArrow
              isDisabled={genre.name.length < 15}
              label={genre.name}
            >
              <Text noOfLines={1} fontSize="lg">
                {genre.name}
              </Text>
            </Tooltip>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
