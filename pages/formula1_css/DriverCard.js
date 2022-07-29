import React, { useState } from "react";
import styles from "./DriverCard.module.css";
import Image from "next/image";
import plus_sign from "../../images/plus-sign.png";
import minus_sign from "../../images/minus-sign.png";

function DriverCard(props) {
  const [hovering, setHovering] = useState(false);
  const [points, setPoints] = useState(props.points);

  const changePointsPlus = () => {
    setPoints(points + 1);
  };

  const changePointsMinus = () => {
    setPoints(points - 1);
  };

  const onMouseEnterFcn = () => {
    setHovering(true);
  };

  const onMouseLeaveFcn = () => {
    setHovering(false);
  };
  return (
    <div
      className={styles.maincard}
      style={{
        borderTop: hovering ? `2px solid ${props.color}` : "2px solid black",
        borderRight: hovering ? `2px solid ${props.color}` : "2px solid black",
        borderTopRightRadius: "10px",
        padding: "10px",
      }}
      onMouseEnter={onMouseEnterFcn}
      onMouseLeave={onMouseLeaveFcn}
    >
      <div className={styles.maincard__header}>
        <div className={styles.maincard__header__place}>{props.place}</div>
        <div className={styles.maincard__header__points}>
          <div className={styles.maincard__header__points__number}>
            {points}
          </div>
          <div className={styles.maincard__header__points__label}>PTS</div>
        </div>
      </div>
      <div
        className={styles.maincard__center}
        style={{
          borderLeft: hovering ? `4px solid ${props.color}` : "2px solid black",
          padding: "10px",
          borderRadius: "2rem",
          margin: "0.3rem",
        }}
      >
        <div className={styles.maincard__center__name}>
          <div className={styles.maincard__center__firstname}>
            {props.firstname}
          </div>
          <div className={styles.maincard__center__lastname}>
            {props.lastname}
          </div>
        </div>
        <div>
          <Image
            src={props.flag}
            alt={props.country}
            width="40px"
            height="25px"
            className={styles.maincard__center__country}
          />
        </div>
      </div>
      <div className={styles.maincard__centerteam}>{props.team}</div>
      <div className={styles.maincard__footer}>
        <Image src={props.raceno} alt="Race No." width="100px" height="50px" />
        <Image
          src={props.profile}
          alt="Profile Image"
          width="200px"
          height="200px"
          style={styles.profileImage}
        />
      </div>
      <div className={styles.maincard__pointsFooter}>
        <span
          onClick={() => changePointsPlus()}
          className={styles.maincard__pointsFooter__plus}
        >
          <Image src={plus_sign} alt="+" width="30px" height="30px" />
        </span>
        <span
          onClick={() => changePointsMinus()}
          className={styles.maincard__pointsFooter__minus}
        >
          <Image src={minus_sign} alt="-" width="30px" height="10px" />
        </span>
      </div>
    </div>
  );
}

export default DriverCard;
