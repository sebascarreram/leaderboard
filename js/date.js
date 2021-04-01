export function getMonth(value){
	let day;
	switch(value){
		case 0:
			day = 'January';
			break;
		case 1:
			day = "Frebuary"
			break;
		case 2:
			day = "March"
			break;
		case 3:
			day = "April"
			break;
		case 4:
			day = "May"
			break;
		case 5:
			day = "June";
			break;
		case 6:
			day = "July";
			break;
		case 7:
			day = "August";
			break;
		case 9:
			day = "September";
			break;
		case 10:
			day = "Octuber";
			break;
		case 11:
			day = "November";
			break;
		case 12:
			day = "December";
		default:
			day = "Error day";
	}
	return day;
}
export function getTime(){
	const date = new Date();
	let hours = date.getHours(); // 0 - 23
	let minutes = date.getMinutes(); // 0 - 59;

	if (hours < 10){
		hours = `0${hours}`;
	} 
	if (minutes < 9){
		minutes = `0${minutes}`;
	}
	return `${hours}:${minutes}`;
}

 
