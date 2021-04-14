export const elements = {
	name: document.getElementById("name"),
	lastname: document.getElementById("lastname"),
	country: document.getElementById("country"),
	score: document.getElementById("score"),
	btnAdd: document.querySelector(".btn"),
	main: document.querySelector("main"),
	section: document.querySelector(".section"),
	btnRemove: document.querySelectorAll(".btnsGroup--delete"),
	btnYesConfirm: document.querySelector(".btn__remove"),
	modal: document.querySelector(".modal"),
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

export const allPlayers = function (card, cardModal) {
	return (() => {
		try {
			const info = JSON.parse(localStorage.getItem("info"));

			if (info) {
				info.forEach((la) => {
					card(la);
				});
			}
			cardModal();
			//const ab = JSON.parse(localStorage.getItem("info"));

			//console.log(ab);
		} catch (err) {
			console.log(err.message);
		}
	})();
};
