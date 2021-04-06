import { elements } from "./elements.js";

export const card = (info, onModal) => {
  if (!info) {
    console.log("There are no items");
    return;
  }
  const markup = `
		<div id=${info.id} class="boxGroup">
    	<div class="box box--1">
        <p class="box__name">${info.name} ${info.lastname}</p>
        <p class="box__date">${info.date}</p>
      </div>
      <div class="box box--2">
        <p class="box__country">${info.country}</p>
      </div>
      <div class="box box--3">
        <p class="box__score">${info.score}</p>
      </div>
      <div class="box box--4">
      <div class="btnsGroup">
        <button onclick=${onModal} class="btnsGroup__btn btnsGroup--delete">
          <svg class="btnsGroup__icon icon-bin">
            <use xlink:href="assets/icons/icons.svg#icon-bin"></use>
          </svg>
        </button>
        <button class="btnsGroup__btn btnsGroup--addFive">+5</button>
        <button class="btnsGroup__btn btnsGroup--minusFive">-5</button>
      </div>
    </div>
  </div>
`;
  elements.section.insertAdjacentHTML("beforeend", markup);
};

const closeOver = function () {};

export const cardModal = () => {
  const markup = `
    <div id="modal" class="modal">
     <div class="modal__content">
      <h3>Confirmation</h3>
      <p>Are you sure you want to remove this player?</p>
      <div class="modal__button">
        <button 
          onclick="document.getElementById('modal').style.display='none',
          document.querySelector('.modal__overlay')"
          class="btn btn__cancel">
          Cancel
        </button>
        <button class="btn btn__remove">Yes, remove it</button>
     </div>
     </div>
         </div>`;

  elements.main.insertAdjacentHTML("beforeend", markup);
};
