let subscribers = {};

// Subscribe function
export function writeSub(what, func) {
  if (!func) {
    return console.log(
      "Missing Second Argument! (You need to add a function as callback)"
    );
  }

  if (typeof func !== "function") {
    return console.log(
      "The second argument has to be a function! (A callback)"
    );
  }

  if (!subscribers[what]) {
    subscribers[what] = [];
    console.log(`${what} was created!`);
  }

  subscribers[what].push(func);
}

// Publish function
export function readSub(what) {
  if (subscribers[what]) {
    subscribers[what].forEach((element) => element());
  } else {
    return console.log("404");
  }
}

// Unsubscribe function
export function delSub(what) {
  subscribers[what].length === 0;
  return console.log(`Unsubscribed from ${what}`);
}

// Unsubscribe all function
export function delAllSub() {
  subscribers = {};
}

// These are used for vladiState (custom useState)
let singleSubscribers = {};

export function vladiSub(data) {
  if (vladiPub(data) !== undefined) {
    delete singleSubscribers[data];
  }
  singleSubscribers[data] = data;
  return singleSubscribers[data];
}

export function vladiPub(data) {
  if (singleSubscribers[data]) {
    return singleSubscribers[data];
  } else {
    return undefined;
  }
}

export function vladiUnsub(data) {
  delete singleSubscribers[data];
  return;
}
