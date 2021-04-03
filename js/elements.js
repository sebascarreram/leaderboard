export const elements = {
	name: document.getElementById("name"),
	lastname: document.getElementById("lastname"),
	country: document.getElementById("country"),
	score: document.getElementById("score"),
	button: document.querySelector(".btn"),
	main: document.querySelector("main"),
	section: document.querySelector(".section"),
	btnRemove: document.querySelectorAll(".btnsGroup--delete"),
};

export const deleteOneItem = function (array, value) {
	//console.log(array)
	return array.filter(function (ele) {
		return ele.id != value;
	});
};

export const deleteAllItems = function () {};

export const persistData = function (arr) {
	return localStorage.setItem("info", JSON.stringify(arr));
};
