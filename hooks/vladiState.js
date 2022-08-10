import {
  vladiSub,
  vladiPub,
  vladiUnsub,
} from "../pages/stateManagement/publishSubscribeUnsubscribe";
import { useRouter } from "next/router";

function useVladiValue(data) {
  vladiPub(data);
}

function setVladiValue(data) {
  vladiSub(data);
  useVladiState(data);
}

export function useVladiState(data) {
  let twoStates = [data, setVladiValue];
  if (useVladiValue(data) === undefined) {
    vladiSub(data);
    twoStates[0] = data;
  } else {
    vladiUnsub(data);
    vladiSub(data);
    twoStates[0] = data;
  }
  console.log("Subscribed", twoStates);
  return twoStates;
}
