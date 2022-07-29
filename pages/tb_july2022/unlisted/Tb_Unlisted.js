import React, { useState, useRef } from "react";
import styles from "./Tb_Unlisted.module.css";
import md5 from "md5-hash";

function Tb_Unlisted() {
  const [hasAccess, setHasAccess] = useState(false);
  const [message, setMessage] = useState("");
  const [embedId, setEmbedId] = useState(null);
  const keyRef = useRef(null);

  const access = (e) => {
    e.preventDefault();
    const hashed = md5(keyRef.current.value);
    const hashedSecret = process.env.NEXT_PUBLIC_YOUTUBE_KEY;
    if (hashedSecret === hashed) {
      setEmbedId(process.env.NEXT_PUBLIC_YOUTUBE_ID);
      setHasAccess(true);
    } else {
      setMessage("Invalid Access Key!");
    }
  };
  return (
    <div className={styles.container}>
      {!hasAccess ? (
        <div className={styles.container__noAccess}>
          <form className={styles.form} onSubmit={access}>
            <h2 style={{ color: "white" }}>Enter the key</h2>
            <input
              type="text"
              className={styles.container__keyField}
              ref={keyRef}
              placeholder="Key..."
            />
            <input
              value="Enter"
              type="submit"
              className={styles.container__submit}
            />
            <p style={{ fontSize: "1.5em", color: "red", fontWeight: "bold" }}>
              {message}
            </p>
          </form>
        </div>
      ) : (
        <div className={styles.container__hasAccess}>
          <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.container__iframe}
          />
        </div>
      )}
    </div>
  );
}

export default Tb_Unlisted;
