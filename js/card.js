import { elements } from './elements.js'

export const card = info => {
  if (!info){
    console.log("There are no items")
    return
  }
  const markup = `
		<div class="boxGroup">
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
        <button class="btnsGroup__btn btnsGroup--delete">
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


