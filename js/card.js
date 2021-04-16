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
      <div class="btnGroup">
        <button id=${info.id} class="btnGroup__btn btnGroup--delete">
          <svg id=${info.id} class="btnGroup__icon icon-bin">
            <use id=${info.id} xlink:href="assets/icons/icons.svg#icon-bin"></use>
          </svg>
        </button>
        <button id=${info.id} class="btnGroup__btn btnGroup--addFive">+5</button>
        <button id=${info.id} class="btnGroup__btn btnGroup--minusFive">-5</button>
      </div>
    </div>
  </div>
`;
  elements.section.insertAdjacentHTML("beforeend", markup);
};

export const error = (text) => {
  const markup = `
  <p class="error">${text}</p>
  `;
  elements.header.insertAdjacentHTML("beforeend", markup);
};

export const cardModal = () => {
  const markup = `
    <div id="modal" class="modal">
     <div class="modal__content">
      <h3>Confirmation</h3>
      <p>Are you sure you want to remove this player?</p>
      <div class="modal__button">
        <button 
          onclick="document.getElementById('modal').style.display='none',
          document.querySelector('.modal__overlay'), document.querySelector('.btn__remove').textContent = 'a'"
          class="btn btn__cancel">
          Cancel
        </button>
        <button class="btn btn__remove"></button>
     </div>
     </div>
         </div>`;

  elements.main.insertAdjacentHTML("beforeend", markup);
};

export const buttonRemoveAll = () => {
  const markup = `<button class="btn btn__allRemove">Delete all players</button>`;
  elements.header.insertAdjacentHTML("beforeend", markup);
};
