import React, { useState, useRef } from "react";
import NavigationMenu from "../../components/NavigationMenu";
import styles from "./JSEncryption.module.css";

function JSEncryption() {
  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    ",",
    "?",
    "!",
    "'",
    "_",
    "-",
    "&",
    "@",
    "#",
    "$",
    "%",
    "*",
    "(",
    ")",
    " ",
  ];

  const enc_messageRef = useRef(null);
  const enc_secretRef = useRef(null);
  const dec_messageRef = useRef(null);
  const dec_secretRef = useRef(null);

  const [encrypted, setEncrypted] = useState(null);
  const [decrypted, setDecrypted] = useState(null);

  const encryptMessage = (e) => {
    e.preventDefault();
    let message = enc_messageRef.current.value;
    let secret = enc_secretRef.current.value;
    let messageUpper = message.toUpperCase();
    let secretUpper = secret.toUpperCase();
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
      encryptedMessage +=
        characters[
          (characters.indexOf(messageUpper[i]) +
            characters.indexOf(secretUpper[i % secretUpper.length])) %
            characters.length
        ];
    }
    setEncrypted(encryptedMessage);
    console.log(encryptedMessage);
  };

  const decryptMessage = (e) => {
    e.preventDefault();
    let message = dec_messageRef.current.value;
    let secret = dec_secretRef.current.value;
    let messageUpper = message.toUpperCase();
    let secretUpper = secret.toUpperCase();
    let decryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
      decryptedMessage +=
        characters[
          characters.indexOf(messageUpper[i]) -
            characters.indexOf(secretUpper[i % secretUpper.length]) >=
          0
            ? characters.indexOf(messageUpper[i]) -
              characters.indexOf(secretUpper[i % secretUpper.length])
            : characters.length +
              characters.indexOf(messageUpper[i]) -
              characters.indexOf(secretUpper[i % secretUpper.length])
        ];
    }
    setDecrypted(decryptedMessage);
    console.log(decryptedMessage);
  };

  return (
    <div className={styles.maincontainer}>
      <NavigationMenu style={{ display: "flex", alignSelf: "flex-start" }} />
      <div className={styles.maincontainer__title}>
        <h1>Get ready to encrypt your data!</h1>
      </div>
      <div className={styles.maincontainer__encryption}>
        <h2>Encrypt Data</h2>
        <div>
          <h4>Enter your message here</h4>
          <textarea placeholder="Message..." ref={enc_messageRef} />
        </div>
        <div>
          <h4>Enter secret code</h4>
          <textarea type="text" placeholder="Secret..." ref={enc_secretRef} />
        </div>
        <div>
          <button
            onClick={(e) => encryptMessage(e)}
            className={styles.maincontainer__encryption__button}
          >
            Encrypt
          </button>
        </div>
        <div>
          <h4>Your encrypted message:</h4>
          <input type="text" value={encrypted} readOnly />
        </div>
      </div>

      <div className={styles.maincontainer__decryption}>
        <h2>Decrypt Data</h2>
        <div>
          <h4>Enter your message here</h4>
          <textarea type="text" placeholder="Message..." ref={dec_messageRef} />
        </div>
        <div>
          <h4>Enter secret code</h4>
          <textarea type="text" placeholder="Secret..." ref={dec_secretRef} />
        </div>
        <div>
          <button
            onClick={(e) => decryptMessage(e)}
            className={styles.maincontainer__decryption__button}
          >
            Decrypt
          </button>
        </div>
        <div>
          <h4>Your decrypted message:</h4>
          <input type="text" value={decrypted} readOnly />
        </div>
      </div>
    </div>
  );
}

export default JSEncryption;
