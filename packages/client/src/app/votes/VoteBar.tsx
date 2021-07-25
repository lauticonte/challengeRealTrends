import {Stack, Text} from "@chakra-ui/layout";
import React from "react";

interface Props {
  percentage: number;
}

const VoteBar: React.FC<Props> = ({percentage}) => {
  return (
    <Stack
      border="4px solid"
      borderBottomRadius={999999}
      justify="center"
      position="relative"
      width={14}
    >
      <Text fontWeight="bold" zIndex={100}>
        {isNaN(percentage) ? 0 : percentage} %
      </Text>
      <Stack
        bg={`hsl(${percentage}, 100%, 50%)`}
        borderBottomRadius={999999}
        bottom={0}
        height={`${percentage}%`}
        left="0"
        position="absolute"
        transition="all 1s"
        width="100%"
        zIndex={2}
      />
    </Stack>
  );
};

export default VoteBar;
