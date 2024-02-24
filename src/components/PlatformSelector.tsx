import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatformLookup from "../hooks/usePlatformLookup";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatform();

  const updatePlatform = useGameQueryStore((s) => s.updatePlatform);

  const selectedPlatform = usePlatformLookup();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {platforms?.results?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => updatePlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
