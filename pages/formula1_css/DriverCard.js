import React from "react";
import styles from "./DriverCard.module.css";
import Image from "next/image";

function DriverCard(props) {
  return (
    <div
      className={styles.maincard}
      style={{
        borderTop: `2px solid ${props.color}`,
        borderRight: `2px solid ${props.color}`,
        borderTopRightRadius: "10px",
        padding: "10px",
      }}
    >
      <div className={styles.maincard__header}>
        <div className={styles.maincard__header__place}>{props.place}</div>
        <div className={styles.maincard__header__points}>
          <div className={styles.maincard__header__points__number}>
            {props.points}
          </div>
          <div className={styles.maincard__header__points__label}>PTS</div>
        </div>
      </div>
      <div
        className={styles.maincard__center}
        style={{
          borderLeft: `4px solid ${props.color}`,
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
    </div>
  );
}

export default DriverCard;
