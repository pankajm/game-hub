import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const orders = [
    "name",
    "released",
    "added",
    "created",
    "updated",
    "rating",
    "metacritic",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort
      </MenuButton>
      <MenuList>
        {orders.map((order) => (
          <MenuItem key={order}>{order}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
