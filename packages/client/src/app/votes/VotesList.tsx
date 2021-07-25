import React from "react";
import {Stack, Text} from "@chakra-ui/layout";

import {Vote} from "./types";

interface Props {
  votes: Vote[];
}

const VotesList: React.FC<Props> = ({votes}) => {
  return (
    <Stack spacing={1}>
      <Text fontWeight="bold">{votes.length} votes</Text>
      <Stack
        bg="white"
        border="2px solid"
        height="200px"
        overflowX="auto"
        overflowY="auto"
        paddingX={4}
        rounded={8}
        spacing={0.5}
      >
        {votes
          .slice(0)
          .reverse()
          .map((vote, index) => (
            <Stack key={index} isInline>
              <Text color="#71D8BF">{vote.user}</Text>
              <Text textAlign="left">{vote.review}</Text>
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};

export default VotesList;
