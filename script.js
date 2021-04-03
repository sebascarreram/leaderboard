import { getMonth, getTime } from "./js/date.js";
import { card, cardModal } from "./js/card.js";
import {
	elements,
	deleteOneItem,
	deleteAllItems,
	persistData,
} from "./js/elements.js";
import { cardWarning } from "./js/cardWarning.js";

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

elements.button.addEventListener("click", () => {
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

	// ID
	const arraySetLen = arraySet.length;

	arraySet.push({
		id: arraySetLen,
		name: elements.name.value,
		lastname: elements.lastname.value,
		date: dateNow(),
		country: elements.country.value,
		score: elements.score.value,
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
	//
});

(() => {
	const info = JSON.parse(localStorage.getItem("info"));
	//console.log(JSON.parse(localStorage.getItem("info"))); // YES
	//console.log(JSON.stringify(localStorage.getItem("info"))) // NOT
	//console.log(localStorage.getItem("info")); // NOT

	if (info) {
		info.forEach((la) => {
			card(la);
		});
	}
	//const ab = JSON.parse(localStorage.getItem("info"));

	//console.log(ab);
})();

const ab = document.querySelectorAll(".btnsGroup--delete");

const getInfo = JSON.parse(localStorage.getItem("info"));
//console.log(typeof getInfo[2].id);

ab.forEach((el) => {
	console.log(el);
	el.addEventListener("click", (la) => {
		//		console.log(la)
		if (la.type === "click") {
			// parseInt(la.path[3].id) || parseInt(la.path[4].id) || parseInt(la.path[5].id)

			const copyArray = [...getInfo];
			const result = deleteOneItem(
				copyArray,
				la.path[3].id || la.path[4].id || la.path[5].id
			);

			const id = document.getElementById(
				la.path[3].id || la.path[4].id || la.path[5].id
			);

			// remove a player in list
			id.remove();
			// Perist data in localStorage
			persistData(result);
		}
		//console.log(la.path)
	});
});
