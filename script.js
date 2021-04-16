import { getMonth, getTime } from "./js/date.js";
import { card, cardModal, error } from "./js/card.js";
import { idUnique } from "./js/idUnique.js";
import {
  elements,
  viewAllPlayers,
  deleteOneItem,
  deleteAllItems,
  persistData,
  getPlayers,
} from "./js/elements.js";
import { cardWarning } from "./js/cardWarning.js";

//
// All Players
viewAllPlayers();
//
//
const allFields = function () {
  if (
    !elements.name.value &&
    !elements.lastname.value &&
    !elements.country.value &&
    !elements.score.value
  ) {
    return false;
  }
  return true;
};
const inputNumber = function (value) {
  const regex = /^[\d]+$/g;
  if (!regex.test(value) && value) {
    return false;
  }
  return true;
};

const dateNow = function () {
  const date = new Date();
  const fullYear = date.getFullYear(); // YYYY
  const month = date.getMonth(); // 0 - 11
  const day = date.getDate(); // 1 - 31

  // slice after upper case
  const shortMonth = getMonth(month).slice(0, 3).toUpperCase();

  // month day, years times(hours:minutes)
  return `${shortMonth} ${day}, ${fullYear} ${getTime()}`;
};

const removeValue = () => {
  elements.name.value = "";
  elements.lastname.value = "";
  elements.country.value = "";
  elements.score.value = "";
};
//
//
//
elements.btnAdd.addEventListener("click", () => {
  const errorP = document.querySelector(".error");
  let errorFalse = false;
  // - errors -
  // All inputs don't be empty
  if (!allFields()) {
    //console.log("All fields are required");
    error("All fields are required");
    errorFalse = true;
    return;
  }
  // Score input must be just NUMBERS
  if (!inputNumber(score.value)) {
    //console.log("Input must be a number");
    error("Input must be a number");
    errorFalse = true;
    return;
  }

  let arraySet = [];
  arraySet = JSON.parse(localStorage.getItem("info")) || [];

  // .trim() -> it removes whitespace from both sides of a string:
  arraySet.push({
    id: idUnique(),
    name: elements.name.value.trim(),
    lastname: elements.lastname.value.trim(),
    date: dateNow(),
    country: elements.country.value.trim(),
    // this + sign is converting to Number
    score: +elements.score.value,
  });

  //	console.log(arraySet);
  persistData(arraySet);

  if (arraySet) {
    const len = arraySet.length;
    card(arraySet[len - 1]);
  } else {
    arrayFull.forEach((la) => {
      card(la);
    });
  }
  // remove all value in input
  removeValue();
  if (errorFalse) {
    errorP.remove();
  }
  location.reload();
});

const deleteBtn = document.querySelectorAll(".btnGroup--delete");

const getInfo = JSON.parse(localStorage.getItem("info"));
//
const btnYesConfirm = document.querySelector(".btn__remove");
const modal = document.querySelector(".modal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  //console.log(event.target)
  //console.log(modal);
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

deleteBtn.forEach((el) => {
  el.addEventListener("click", (la) => {
    modal.style.display = "flex";

    btnYesConfirm.textContent = "Yes, remove it";
    // Button YES - to remove
    btnYesConfirm.addEventListener("click", () => {
      modal.style.display = "none";
      // parseInt(la.path[3].id) || parseInt(la.path[4].id) || parseInt(la.path[5].id)

      //const copyArray = [...getInfo];
      const result = deleteOneItem(getInfo, la.target.id);

      const id = document.getElementById(la.target.id);

      // remove a player in list
      id.remove();
      // Persist data in localStorage
      persistData(result);
      //console.log("REMOVED");
      btnYesConfirm.textContent = "";

      location.reload();
    });
  });
});

``;
const btnAdd = document.querySelectorAll(".btnGroup--addFive");
const btnMinus = document.querySelectorAll(".btnGroup--minusFive");

btnAdd.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // it's find 1 player by ID after +5
    const playerOne = getPlayers().map((player) => {
      if (e.target.id === player.id) {
        player.score += 5;
      }
      return player;
    });
    persistData(playerOne);
    location.reload();
  });
});

btnMinus.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // it's find 1 player by ID after -5
    const playerOne = getPlayers().map((player) => {
      if (e.target.id === player.id) {
        player.score -= 5;
      }
      return player;
    });
    persistData(playerOne);
    location.reload();
  });
});

const btnAllRemove = document.querySelector(".btn__allRemove");

if (btnAllRemove) {
  btnAllRemove.addEventListener("click", (e) => {
    modal.style.display = "flex";
    btnYesConfirm.textContent = "Yes, remove all";

    btnYesConfirm.addEventListener("click", () => {
      modal.style.display = "none";
      deleteAllItems();
      btnYesConfirm.textContent = "";
      location.reload();
    });
  });
}
