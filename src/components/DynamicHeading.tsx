import { Text } from "@chakra-ui/react";

interface Props {
  genre: string;
  platform: string;
}

const DynamicHeading = ({ genre, platform }: Props) => {
  return (
    <Text as="b" fontSize="5xl">
      {platform} {genre} Games
    </Text>
  );
};

export default DynamicHeading;
