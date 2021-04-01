import { getMonth, getTime } from "./js/date.js";
import { card } from "./js/card.js";
import { elements } from "./js/elements.js";

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

	const arrayFull = [];

	arrayFull.push({
		name: elements.name.value,
		lastname: elements.lastname.value,
		date: dateNow(),
		country: elements.country.value,
		score: elements.score.value,
	});

	let arraySet = [];
	arraySet = JSON.parse(localStorage.getItem("info")) || [];

	arraySet.push({
		name: elements.name.value,
		lastname: elements.lastname.value,
		date: dateNow(),
		country: elements.country.value,
		score: elements.score.value,
	});

	//	console.log(arraySet);
	localStorage.setItem("info", JSON.stringify(arraySet));
	//localStorage.setItem("info", arraySet);

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
})();
