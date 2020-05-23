import "./Home.css";

import React from "react";

import Container from "../../atoms/Container";
import Chrome from "../../templates/Chrome";
import QuestionGroup from "../../organisms/QuestionGroup/QuestionGroup";

const Home = () => {
  const baseclass = "home";

  return (
    <Container className={baseclass}>
      <Chrome>
        <section className={`${baseclass}__contents`}>
          <QuestionGroup />
        </section>
      </Chrome>
    </Container>
  );
};

export default Home;
