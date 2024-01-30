import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import genres from "../data/genres";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre;
  onGenreSelect: (genre: Genre) => void;
}

const GenreSelector = ({ selectedGenre, onGenreSelect }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Genre"}
      </MenuButton>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem key={genre.id} onClick={() => onGenreSelect(genre)}>
            <Image
              boxSize="2rem"
              borderRadius={8}
              src={genre.image_background}
              alt="Fluffybuns the destroyer"
              mr="12px"
              objectFit="cover"
            />
            <span>{genre.name}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
