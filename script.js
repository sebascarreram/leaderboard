import { getMonth, getTime } from "./js/date.js";
import { card, cardModal } from "./js/card.js";
import { idUnique } from "./js/idUnique.js";
import {
  elements,
  allPlayers,
  deleteOneItem,
  deleteAllItems,
  persistData,
} from "./js/elements.js";
import { cardWarning } from "./js/cardWarning.js";

//
// All Players
allPlayers(card, cardModal);
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
elements.btnAdd.addEventListener("click", () => {
  // - errors -
  // All inputs don't be empty
  if (!allFields()) {
    console.log("All fields are required");
    return;
  }
  // Score input must be just NUMBERS
  if (!inputNumber(score.value)) {
    console.log("Input must be a number");
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
  location.reload()
});

const deleteBtns = document.querySelectorAll(".btnsGroup--delete");

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

deleteBtns.forEach((el) => {
  el.addEventListener("click", (la) => {
    console.log(la.target.id);
    console.log(la);
    modal.style.display = "flex";

    // Button YES - to remove
    btnYesConfirm.addEventListener("click", () => {
      modal.style.display = "none";
      // parseInt(la.path[3].id) || parseInt(la.path[4].id) || parseInt(la.path[5].id)

      //const copyArray = [...getInfo];
      const result = deleteOneItem(getInfo, la.target.id);

      const id = document.getElementById(la.target.id);

      // remove a player in list
      id.remove();
      // Perist data in localStorage
      persistData(result);
      //console.log("REMOVED");
      location.reload()
    });
  });
});
