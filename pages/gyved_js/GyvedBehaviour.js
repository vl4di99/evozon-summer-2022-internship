import React, { useState } from "react";
import NavigationMenu from "../../components/NavigationMenu";
import styles from "./GyvedBehaviour.module.css";

function GyvedBehaviour() {
  const arr = [];
  const [text, setText] = useState(null); // Used to show the result on the webpage
  const [loading, setLoading] = useState(true);

  const makeUser = function () {
    return {
      jump: function () {
        arr.push("jumping");
        return this;
      },
      speak: function () {
        arr.push("speaking");
        return this;
      },
      run: function () {
        arr.push("running");
        return this;
      },
      swim: function () {
        arr.push("swimming");
        return this;
      },
      sleep: function () {
        arr.push("sleeping");
        return this;
      },
      exec: function () {
        setText(arr.join(", "));
      },
    };
  };
  const runFcn = () => {
    const user = makeUser();
    // calling this
    user.sleep().swim().speak().jump().swim().sleep().run().run().exec();
    setLoading(false);
  };
  return (
    <div className={styles.container}>
      <NavigationMenu style={{ display: "flex", alignSelf: "flex-start" }} />
      {loading ? (
        <div>
          <button onClick={() => runFcn()} className={styles.container__button}>
            User: Do tasks
          </button>
        </div>
      ) : (
        <div className={styles.container__text}>{text}</div>
      )}
    </div>
  );
}

export default GyvedBehaviour;
