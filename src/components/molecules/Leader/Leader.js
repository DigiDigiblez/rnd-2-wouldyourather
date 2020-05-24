import "./Leader.css";

import React, { useState } from "react";

import Container from "../../atoms/Container";
import Separator from "../../atoms/Separator/Separator";
import LionelLion from "../../../icons/lionel-lion.svg";
import TrophyHolder from "../../../icons/trophy-holder.svg";
import GoldTrophy from "../../../icons/1st-place.svg";
import SilverTrophy from "../../../icons/2nd-place.svg";
import BronzeTrophy from "../../../icons/3rd-place.svg";
import ScoreHolder from "../../../icons/score-holder.svg";
import { useSelector } from "react-redux";

const Leader = ({ id, placement, answers, questions, points }) => {
  const baseclass = "leader";

  const [plansCategory, setPlansCategory] = useState("Unanswered Questions");
  const [trophy] = useState(() => {
    if (placement === 1) return { src: GoldTrophy, alt: "1st place!!!" };
    if (placement === 2) return { src: SilverTrophy, alt: "2nd place!!" };
    if (placement === 3) return { src: BronzeTrophy, alt: "3rd place!" };
  });

  const [userAvatars] = useState(
    useSelector(state => {
      return {
        johndoe: state.users.johndoe.avatarURL,
        sarahedo: state.users.sarahedo.avatarURL,
        tylermcginnis: state.users.tylermcginnis.avatarURL
      };
    })
  );

  return (
    <Container className={baseclass}>
      <section className={`${baseclass}__content`}>
        <div className={`${baseclass}__content-image`}>
          <img
            src={TrophyHolder}
            alt="Prize holder"
            className={`${baseclass}__content-trophy-holder`}
          />
          <img
            src={trophy.src}
            alt={trophy.alt}
            title={trophy.alt}
            className={`${baseclass}__content-trophy`}
          />
          <img
            src={userAvatars[id]}
            alt={id}
            title={id}
            width={80}
            height={80}
          />
        </div>
        <div className={`${baseclass}__content-separator`}>
          <Separator direction="vertical" />
        </div>
        <div className={`${baseclass}__content-details`}>
          <h2>{id}</h2>
          <div className={`${baseclass}__content-details-answered`}>
            <span>Answered questions</span>
            <span>{answers}</span>
          </div>
          <Separator />
          <div className={`${baseclass}__content-details-created`}>
            <span>Created questions</span>
            <span>{questions}</span>
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
            <span className={`${baseclass}__content-score-value`}>
              {points}
            </span>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default Leader;
