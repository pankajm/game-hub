import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import useGameDetail from "../hooks/useGameDetail";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: gameDetail } = useGameDetail(slug!);
  return (
    <Box paddingX={5}>
      <Heading>{slug}</Heading>
      <Text paddingY={5}>{gameDetail?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailsPage;
