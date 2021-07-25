import * as io from "socket.io";
import * as tmi from "tmi.js";
import {Pokemon, Vote} from "types";

// mock
const pokemons: Pokemon[] = [
  {
    id: 6,
    name: "Charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    types: ["fire", "flying"],
  },
  {
    id: 9,
    name: "Blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    types: ["water"],
  },
];

let votes: Vote[] = [
  {
    user: "not-lauticonte",
    pokemon: 6,
    review: "He votado #6",
  },
];

const server = new io.Server(5000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// TMI

const client = new tmi.client({
  channels: ["lauticonte"]
})

client.on("connected", (address, port) => {
  console.log(`Hello ${address}:${port}`);
});
client.connect();

client.on("chat", (target, context, msg, self) => {
  if (self) return;

  if (msg.charAt(0) === "!") {
    const votationString = msg.substring(1).split(" ")[0];
    const vote = parseInt(votationString);

    if (vote === pokemons[0].id || vote === pokemons[1].id) {
      if (msg.indexOf(" ") > 0) {
        const mensajeTruncado = msg.substring(msg.indexOf(" ") + 1);
        addVote(context.username!, vote, mensajeTruncado);
      } else {
        addVote(context.username!, vote, `He votado #${vote}`);
      }
    }
  }
});

const resetVotes = () => {
  votes = [];
};

const addVote = (user: string, vote: number, review?: string) => {
  let lastVote = votes.find((vote) => vote.user === user);
  if (lastVote) {
    lastVote.pokemon = vote;
    lastVote.review = review;
  } else {
    votes = [...votes, {user, pokemon: vote, review}];
  }
  server.emit("state", {pokemons, votes});
};

server.on("connection", (socket) => {
  socket.emit("state", {pokemons, votes});

  socket.on("reset-votes", () => {
    resetVotes();
    socket.emit("state", {pokemons, votes});
  });
});
