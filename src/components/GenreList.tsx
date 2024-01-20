import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onGenreClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onGenreClick }: Props) => {
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
              marginRight="5px"
            ></Image>

            <Button
              style={{
                textAlign: "left",
                textWrap: "wrap",
              }}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : ""}
              variant="link"
              onClick={() => onGenreClick(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
