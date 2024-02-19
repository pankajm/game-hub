import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";
import usePlatformLookup from "../hooks/usePlatformLookup";

interface Props {
  onPlatformSelect: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatformId }: Props) => {
  const { data: platforms, error } = usePlatform();

  const selectedPlatform = usePlatformLookup(selectedPlatformId);

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
            onClick={() => onPlatformSelect(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
