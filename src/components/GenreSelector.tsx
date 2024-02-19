import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenre, { Genre } from "../hooks/useGenres";
import useGenreLookup from "../hooks/useGenreLookup";

interface Props {
  selectedGenreId?: number;
  onGenreSelect: (genre: Genre) => void;
}

const GenreSelector = ({ selectedGenreId, onGenreSelect }: Props) => {
  const { data: genres } = useGenre();
  const selectedGenre = useGenreLookup(selectedGenreId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Genre"}
      </MenuButton>
      <MenuList>
        {genres?.results?.map((genre) => (
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
