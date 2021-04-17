import { card, cardModal, buttonRemoveAll } from "./card.js";

export const elements = {
  name: document.getElementById("name"),
  lastname: document.getElementById("lastname"),
  country: document.getElementById("country"),
  score: document.getElementById("score"),
  btnAdd: document.querySelector(".btn__add"),
  main: document.querySelector("main"),
  section: document.querySelector(".section"),
  btnRemove: document.querySelectorAll(".btnGroup--delete"),
  btnYesConfirm: document.querySelector(".btn__remove"),
  modal: document.querySelector(".modal"),
  header: document.querySelector(".header"),
  removeAll: document.querySelector(".btn__allRemove"),
  allInput:  document.querySelectorAll("input"),
};

export const deleteOneItem = function (array, value) {
  //console.log(array)
  return array.filter(function (ele) {
    return ele.id != value;
  });
};

export const getPlayers = function () {
  //callback(JSON.parse(localStorage.getItem("info")))
  return JSON.parse(localStorage.getItem("info"));
};

// removing all the localStorage items
export const deleteAllItems = function () {
  return localStorage.clear();
};

export const persistData = function (arr) {
  return localStorage.setItem("info", JSON.stringify(arr));
};

export const viewAllPlayers = function () {
  return (() => {
    try {
      const info = JSON.parse(localStorage.getItem("info"));
      if (info) {
        info.sort(function (a, b) {
          return b.score - a.score;
        });
      }

      if (info) {
        info.forEach((la) => {
          card(la);
        });
        // Show button 'Delete all players'
        buttonRemoveAll();
      }

      cardModal();
      //console.log(ab);
    } catch (err) {
      console.log(err.message);
    }
  })();
};
