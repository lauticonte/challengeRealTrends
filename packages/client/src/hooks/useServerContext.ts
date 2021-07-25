import React from "react";

import ServerContext, {Context} from "~/context/ServerContext";

export function useInformation(): [Context["state"]["pokemons"], Context["state"]["votes"]] {
  const {
    state: {pokemons, votes},
  } = React.useContext(ServerContext);

  return [pokemons, votes];
}

export function useResetVotes(): Context["resetVotes"] {
  const {resetVotes} = React.useContext(ServerContext);

  return resetVotes;
}
