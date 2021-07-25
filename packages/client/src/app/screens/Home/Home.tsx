import React from "react";
import styles from "./Home.module.scss";

import logo from "~/assets/logo.svg";
import {useInformation, useResetVotes} from "~/hooks/useServerContext";
import VotesList from "~/app/votes/VotesList";

const Home: React.FC = () => {
  const [pokemons, votes] = useInformation();
  const resetVotes = useResetVotes();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          <img alt="RealTrends" src={logo} width={180} />
        </h1>
        <h3>Lets get this party started</h3>
      </header>

      <section className={styles.products}>

      {pokemons.map((pokemon) => {
        const pokemonVotes = votes.filter((votes) => votes.pokemon === pokemon.id);
        const percentage = (pokemonVotes.length * 100) / votes.length;

        
         return (
            <article key={pokemon.id}>
              <div>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.image} width={320} />
                <p>{pokemonVotes.length} voto(s) </p>
                <ul>
                  {pokemonVotes.map((vote) => (
                    <li key={vote.user}>
                      <b>{vote.user}</b>
                      <span>: {vote.review || "-"}</span>
                    </li>
                    ))}
                </ul>
              </div>
              <aside style={{height: `${percentage}%` , backgroundColor: `hsl(${percentage}, 100%, 50%)`}} />
            </article>
            );
      })}
    </section>

  </main>
  );
};

export default Home;
