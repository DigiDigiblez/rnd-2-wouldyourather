import "./Leader.css";

import React, { useState } from "react";

import Container from "../../atoms/Container";
import Separator from "../../atoms/Separator/Separator";
import LionelLion from "../../../icons/lionel-lion.svg";
import TrophyHolder from "../../../icons/trophy-holder.svg";
import Trophy from "../../../icons/1st-place.svg";
import ScoreHolder from "../../../icons/score-holder.svg";

const Leader = () => {
  const baseclass = "leader";

  const [plansCategory, setPlansCategory] = useState("Unanswered Questions");

  return (
    <Container className={baseclass}>
      <section className={`${baseclass}__content`}>
        <div className={`${baseclass}__content-image`}>
          <img
            src={TrophyHolder}
            alt="I win!"
            className={`${baseclass}__content-trophy-holder`}
          />
          <img
            src={Trophy}
            alt="1st Place"
            className={`${baseclass}__content-trophy`}
          />
          <img src={LionelLion} alt="Lionel Lion" width={80} height={80} />
        </div>
        <div className={`${baseclass}__content-separator`}>
          <Separator direction="vertical" />
        </div>
        <div className={`${baseclass}__content-details`}>
          <h2>Lionel Lion</h2>
          <div className={`${baseclass}__content-details-answered`}>
            <span>Answered questions</span>
            <span>3</span>
          </div>
          <Separator />
          <div className={`${baseclass}__content-details-created`}>
            <span>Created questions</span>
            <span>2</span>
          </div>
        </div>
        <div className={`${baseclass}__content-separator`}>
          <Separator direction="vertical" />
        </div>
        <div className={`${baseclass}__content-score`}>
          <section className={`${baseclass}__content-score-header`}>
            Score
          </section>
          <div className={`${baseclass}__content-score-val`}>
            <img src={ScoreHolder} alt="Lionel Lion" width={50} height={50} />
            <span className={`${baseclass}__content-score-value`}>5</span>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default Leader;
