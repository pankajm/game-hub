import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box paddingLeft={5}>
        <Heading>Oops !</Heading>
        {isRouteErrorResponse(error) ? (
          <Text>404 - Page not found !</Text>
        ) : (
          <Text>Something went wrong !</Text>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
