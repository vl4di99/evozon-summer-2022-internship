import React from "react";
import { AppContextRoot } from "./appContext";
import IncrementDecrementPage from "../incrementDecrementPage";

function newApp() {
  return (
    <AppContextRoot>
      <IncrementDecrementPage {...pageProps} />
    </AppContextRoot>
  );
}

export default newApp;
