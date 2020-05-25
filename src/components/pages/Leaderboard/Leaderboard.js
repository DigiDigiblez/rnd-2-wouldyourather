import "./Leaderboard.css";

import React, { useState } from "react";
import { useSelector } from "react-redux";

import Container from "../../atoms/Container";
import Leader from "../../molecules/Leader/Leader";
import Chrome from "../../templates/Chrome";

const Leaderboard = () => {
  const baseclass = "leaderboard";

  const [leaderboard] = useState(
    useSelector(store => {
      const userIds = Object.keys(store.users);

      return userIds.map(id => ({
        id,
        answers: Object.keys(store.users[id].answers).length,
        questions: Object.keys(store.users[id].questions).length,
        points:
          Object.keys(store.users[id].answers).length +
          Object.keys(store.users[id].questions).length
      }));
    })
  );

  return (
    <Container className={baseclass}>
      <Chrome>
        <section className={`${baseclass}__contents`}>
          {leaderboard
            .sort((a, b) => b.points - a.points)
            .map((leader, i) => (
              <Leader
                key={leader.id}
                id={leader.id}
                placement={i + 1}
                answers={leader.answers}
                questions={leader.questions}
                points={leader.points}
              />
            ))}
        </section>
      </Chrome>
    </Container>
  );
};

export default Leaderboard;
