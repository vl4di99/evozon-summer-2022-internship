import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import evozonLogo from "../images/evozon-logo.png";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <Image src={evozonLogo} alt="Evozon Logo" width={700} height={180} />
      </div>
      <div className={styles.container__typewriter}>
        <Typewriter
          options={{
            strings: ["Summer 2022 Internship"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className={styles.container__cssadi}>
        <Link href="/adinaiman_css/Formula1Drivers">
          <div>Go To Formula 1 Drivers Page</div>
        </Link>
      </div>
      <div className={styles.container__jszsolt}>
        <Link href="/zsoltdobai_js/JSEncryption">
          <div>Go To JSEncryption</div>
        </Link>
      </div>
    </div>
  );
}
