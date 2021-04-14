import { getPlayers } from "./elements.js";

export const idUnique = function () {
  let timeDt = new Date().getTime(); // Timestamp since January 1, 1970
  const id = "xyx5xyx".replace(/[xy]/g, function (a) {
    // sign | is OR
    // random number between 0 and 16
    // % 16 or 0
    let random = (timeDt + Math.random() * 16) % 16 | 0;
    timeDt = Math.floor(timeDt / 16);
    // 16 -> The number will show as an hexadecimal value
    return (a == "x" ? random : (random & 0x3) | 0x8).toString(16);
  });

  let isUnique;
  if (getPlayers()){
    isUnique = getPlayers().some((ele) => ele.id === id);
  } else {
    isUnique = false;
  }
  // checks if this ID is unique;
  // true => Found ID, and false => Don't find ID.
  if (isUnique) {
    idUnique();
  } else {
    return id;
  }
};
