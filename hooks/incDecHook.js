import React, { useState, useEffect } from "react";
import {
  writeSub,
  readSub,
} from "../pages/stateManagement/publishSubscribeUnsubscribe";

function incDecHook() {
  const [val, setVal] = useState(null);
  const getLocalData = async () => {
    const oldValue = await window.localStorage.getItem("Counter");
    if (oldValue === null) {
      setVal(0);
      await save();
    } else {
      setVal(parseInt(oldValue));
    }
  };

  useEffect(() => {
    getLocalData();
  }, []);

  const plus = () => {
    readSub("Increment Sum");
  };

  const minus = () => {
    readSub("Decrement Min");
  };

  const reset = () => {
    readSub("Reset Counter");
  };

  const save = () => {
    readSub("Save Counter");
  };

  writeSub("Increment Sum", () => {
    setVal(val + 1);
  });

  writeSub("Decrement Min", () => {
    setVal(val - 1);
  });

  writeSub("Reset Counter", () => {
    setVal(0);
  });

  writeSub("Save Counter", () => {
    window.localStorage.setItem("Counter", val);
  });

  return { val, plus, minus, reset, save };
}

export default incDecHook;
