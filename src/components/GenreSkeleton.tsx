import { Box, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack paddingY="5px">
      <Skeleton
        marginRight="5px"
        width="32px"
        height="32px"
        borderRadius={8}
      ></Skeleton>
      <SkeletonText noOfLines={1} skeletonHeight="3" width="60%"></SkeletonText>
    </HStack>
  );
};

export default GenreSkeleton;
