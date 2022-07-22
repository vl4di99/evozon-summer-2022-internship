import React from "react";
import styles from "./Formula1Drivers.module.css";
import Formula1DriversJSON from "./Formula1Drivers.json";
import DriverCard from "./DriverCard";
import NavigationMenu from "../../components/NavigationMenu";

function Formula1Drivers() {
  const Formula1DriversSorted = Formula1DriversJSON.sort(
    (a, b) => b.points - a.points
  );

  return (
    <div className={styles.wrapper}>
      <NavigationMenu style={{ display: "flex", alignSelf: "center" }} />
      <div className={styles.wrapper__title}>Formula 1 Drivers</div>
      <div className={styles.wrapper__cards}>
        {Formula1DriversSorted.map((driver, ix) => (
          <DriverCard
            place={ix + 1}
            points={driver.points}
            firstname={driver.firstname}
            lastname={driver.lastname}
            flag={driver.flagurl}
            country={driver.country}
            team={driver.team}
            raceno={driver.numberurl}
            profile={driver.imageurl}
            color={driver.hex}
            key={driver.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Formula1Drivers;
