require('jquery-csv');

const APP_LINK = `https://docs.google.com/forms/d/e/1FAIpQLSf9TdDeKUVQ_mQtjfJM3fgEwt62luhGCsvRoiebx427F9ZO2Q/viewform?entry.568591555=`;

let input = document.getElementById('input-school');
let select = document.getElementById('select-school');
let button = document.getElementById('button-form');

$.get('./public/files/schools.csv', (data) => {
	let schools = [];
	let csv = $.csv.toArrays(data);
	csv.forEach((row) => {
		let school = row[0];
		schools.push(school);
		let option = document.createElement('option');
			option.setAttribute('value', school);
			option.innerText = school;
			select.appendChild(option);
	});

	button.removeAttribute('disabled');
	button.addEventListener('click', (e) => {
		let yourSchool = select.value;
		console.log(yourSchool);
		window.location = `${APP_LINK}${yourSchool}`;
	});

});