import "./Home.css";

import React, { useEffect } from "react";

import Container from "../../atoms/Container";
import Chrome from "../../templates/Chrome";
import QuestionGroup from "../../organisms/QuestionGroup/QuestionGroup";
import { useDispatch } from "react-redux";
import { handleInitialData } from "../../../redux/actions/shared";

const Home = () => {
  const baseclass = "home";

  const dispatch = useDispatch();

  // Dispatch action to fill store with preset data.
  useEffect(() => {
    dispatch(handleInitialData());
  });

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
