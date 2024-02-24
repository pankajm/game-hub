import { Text } from "@chakra-ui/react";
import useGenreLookup from "../hooks/useGenreLookup";
import usePlatformLookup from "../hooks/usePlatformLookup";

const DynamicHeading = () => {
  const genre = useGenreLookup();
  const platform = usePlatformLookup();

  return (
    <Text as="b" fontSize="5xl">
      {platform?.name} {genre?.name} Games
    </Text>
  );
};

export default DynamicHeading;
