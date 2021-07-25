import * as React from "react";

import logo from "~/assets/logo.svg";

import styles from "./Loading.module.scss";

type LoadingProps = {
  online: true | false;
};

const Loading: React.FC<LoadingProps> = ({online}) => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          <img alt="RealTrends" src={logo} width={180} />
        </h1>

        <h3>
          Service status:{" "}
          {online ? (
            <span style={{color: "green"}}>online</span>
          ) : (
            <span style={{color: "red"}}>offline</span>
          )}
        </h3>
      </header>
    </main>
  );
};

export default Loading;
