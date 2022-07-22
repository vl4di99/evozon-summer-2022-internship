import React from "react";
import { useRouter } from "next/router";
import backButton from "../images/undoButton.png";
import Image from "next/image";

function NavigationMenu() {
  const router = useRouter();
  return (
    <div onClick={() => router.back()}>
      <Image src={backButton} alt="Back" width={50} height={50} />
    </div>
  );
}

export default NavigationMenu;
