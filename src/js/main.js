import {config} from './config';
import {Database} from './database';

let firebase = require('firebase');
window.firebase = firebase;
let prometheusjs = require('prometheusjs');

let database = Database(firebase, config);

database.init(main);

function main(user) {

	console.log('Welcome to ScarletHacks.');

	let prometheus = database.getPrometheus();

	let signupEmail = document.getElementById('signup-email');
	let signupButton = document.getElementById('signup-submit');

	let postSignupEmail = (email) => {
		return new Promise((resolve, reject) => {
			console.log(`Email: ${email}`);
			if (email) {
				let isEmail = email.indexOf('@') > -1;
				let isEdu = email.indexOf('.edu') > -1;
				if (isEmail && isEdu) {
					database.saveSignupEmail(email).then(resolve).catch(reject);
				} else {
					reject('Please enter a valid .edu email address.');
				}
			} else {
				reject('Please enter a valid .edu email address.');
			}
		});
	}

	let signupWithEmail = () => {
		signupButton.classList.add('is-loading');
		let email = signupEmail.value;
		postSignupEmail(email).then((done) => {
			signupButton.classList.remove('is-loading');
			vex.dialog.alert(`We'll let you know when ScarletHacks applications are out!`);
		}).catch((err) => {
			signupButton.classList.remove('is-loading');
			let errMessage = err + '';
			vex.dialog.alert(errMessage);
		});
	}

	signupEmail.addEventListener('keypress', (e) => {
		let keyCode = e.keyCode || e.which;
		if (keyCode == 13) {
			signupWithEmail();
		}
	});

	signupButton.addEventListener('click', (e) => {
		signupWithEmail();
	});

}