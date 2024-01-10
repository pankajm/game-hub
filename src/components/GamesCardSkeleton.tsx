import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GamesCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GamesCardSkeleton;
