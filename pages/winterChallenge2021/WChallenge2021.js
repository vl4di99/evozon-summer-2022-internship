import React from "react";
import styles from "./WChallenge2021.module.css";
import Image from "next/image";
import winterchallenge from "../../images/winter-challenge.png";

function WChallenge2021() {
  const key =
    "SeptimiuCernatAndreiCrivatDianaDanciNorbertFeketeRobertSzacskoAnaComanRaduNedisanDenisaDincaMihaiMoldovanCristaOiegasTimeaSebestyenAnaStancaRoxanaChioreanLapusteFlorinNeagAntonioNemtisorOanaPeresDianaPlesaAlinIleaAlexandraBereDenisaSivuDanielTurusCarmenSzabadiPuscasiuAndreiCrisanAna-MariaMurgRaduGasparDianaCiureaRobertMiklosMalinaComan(Serean)AlexandruNaimanDanielPancAndreeaStanciuCristianHainicAndreiChirilaSilviaDeakPaulMuresanRaresPopAndreiCacioRaresMandreanVictorDanilaSerbanSenciucSergiuVaneaAndraMarinEcaterinaMacoveiIanaGiurgiuIonelaBaltatAnutaIugaAzaleeaMateiAlinaSoareDorinDovleacSergiuPopAndreiTocuMocianCiprianZsoltDobaiGabrielaLucanIlincaMituKrisztianPinkovaiAlexandraCernatNoraLeonteRobertMajeriSandraCostinIonutHadaCristianChiraMariusBidianTiberiuCiceuDianaCaraianCaiusSuciuArnoldErinczTudorRomanMiklosSzekelyPetroniuMarzaSebastianCiocanIoanaMarcuOctaviaGheneaAgotaNemesMoniHolazsLaviniaBudeanIvonaIonitaDianaRomosan";
  const keyLength = key.length;
  const digitsSplit = String(key.length)
    .split("")
    .map((el) => Number(el));
  const digits = digitsSplit.reduce((a, b) => a * b);
  const asciiArray = key.split("").map((x) => x.codePointAt(0));
  console.log(asciiArray);
  const list = [];

  const showImage = () => {
    for (let i = 0; i < keyLength; i++) {
      let j = 0;
      list.push(
        <span
          style={{
            backgroundColor: `rgba(
              ${asciiArray[i]},
              ${asciiArray[i + 1]},
              ${asciiArray[i + 2]},
              ${asciiArray[(i + 3) % 1000]}
            )`,
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      );
    }
    return <div>{list}</div>;
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Winter Challenge 2021</h2>
      </div>
      <div className={styles.container__RawDiv}>
        <div className={styles.container__RawDiv__Image}>
          <Image
            src={winterchallenge}
            alt="winterchallenge2021Raw"
            layout="responsive"
          />
        </div>
        <p>
          We know, that the length of the key is of {key.length}, which is a
          fixed value. Multiplying the digits of the number will result {digits}
          , meaning the position of this value needs to get swapped. Because{" "}
          {key.length}/3 has no remainder, it means that each 3 characters
          represent RGB. Converting the key to ASCII, will result into a string
          with numbers up to 255. If we take for the first character the Red
          channel, for the second Green channel, for the third Blue channel and
          repeat this algorithm, we will obtain a color for each 3 elements.
        </p>
        <div className={styles.container__RawDiv__AsciiChars}>
          {asciiArray.join(" ")}
        </div>
        <p>
          Having also an alpha channel, results into having a remainder,{" "}
          {key.length}/4 = {Math.floor(key.length / 4)} and remainder being{" "}
          {key.length % 4}
        </p>
        <div className={styles.container__RawDiv__RGBA}>{showImage()}</div>
      </div>
    </div>
  );
}

export default WChallenge2021;
