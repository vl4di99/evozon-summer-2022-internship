import React from "react";
import { useVladiValue, useVladiState } from "../../../hooks/vladiState";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

function IncDecPage() {
  const [counter, setCounter] = useVladiState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <button
        className={styles.container__cssf1}
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <span style={{ fontSize: "2.5em", margin: "3%" }}>
        <b>{counter}</b>
      </span>
      <button
        className={styles.container__cssf1}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default IncDecPage;
