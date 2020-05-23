import "./Leaderboard.css";

import React from "react";

import Container from "../../atoms/Container";
import Chrome from "../../templates/Chrome";
import Leader from "../../molecules/Leader/Leader";

const Leaderboard = () => {
  const baseclass = "leaderboard";

  return (
    <Container className={baseclass}>
      <Chrome>
        <section className={`${baseclass}__contents`}>
          <Leader />
        </section>
      </Chrome>
    </Container>
  );
};

export default Leaderboard;
