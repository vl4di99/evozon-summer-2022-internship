import React, { createContext, useContext, useState } from "react";

const AppContextState = createContext();

function AppContext({ children }) {
  const [value, setValue] = useState(null);
  return (
    <AppContextState.Provider value={[value, setValue]}>
      {children}
    </AppContextState.Provider>
  );
}

export default AppContext;

export function AppContextRoot() {
  return useContext(AppContextState);
}
