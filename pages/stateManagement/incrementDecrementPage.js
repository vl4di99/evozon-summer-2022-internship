import React from "react";
import { writeSub, readSub, delSub } from "./publishSubscribeUnsubscribe";
import incDecHook from "../../hooks/incDecHook";
import styles from "./Styling.module.css";

function IncrementDecrementPage() {
  const { val, plus, minus, reset, save } = incDecHook();

  /*
  writeSub("Boo", () => console.log("event1"));
  writeSub("Boo", () => console.log("event2"));
  writeSub("Boo", () => console.log("event3"));
  //delSub("Boo");
  */

  return (
    <div className={styles.container}>
      <h1>Counter</h1>
      <h3>Base on Subscribe-Publish Architecture</h3>
      <div className={styles.container__counter}>
        <div className={styles.container__counter__count}>{val}</div>
        <div className={styles.container__counter__control}>
          <button
            className={styles.container__counter__control__button}
            onClick={() => {
              minus();
            }}
          >
            Minus
          </button>
          <button
            className={styles.container__counter__control__button}
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
          <button
            className={styles.container__counter__control__button}
            onClick={() => {
              save();
            }}
          >
            Save
          </button>
          <button
            className={styles.container__counter__control__button}
            onClick={() => {
              plus();
            }}
          >
            Plus
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncrementDecrementPage;
