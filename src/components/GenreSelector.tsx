import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenreLookup from "../hooks/useGenreLookup";
import useGenre from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreSelector = () => {
  const { data: genres } = useGenre();
  const selectedGenre = useGenreLookup();

  const updateGenre = useGameQueryStore((s) => s.updateGenre);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Genre"}
      </MenuButton>
      <MenuList>
        {genres?.results?.map((genre) => (
          <MenuItem key={genre.id} onClick={() => updateGenre(genre.id)}>
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
