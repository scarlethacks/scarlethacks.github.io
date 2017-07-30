import {config} from './config';
import {Database} from './database';

let firebase = require('firebase');
window.firebase = firebase;
let prometheusjs = require('prometheusjs');

let database = Database(firebase, config);

database.init().then((user) => {
	main(user);
}).catch((err) => {
	vex.dialog.alert(err);
});

let main = (user) => {

	console.log('Welcome to ScarletHacks.');
	console.log(user);

	let prometheus = database.getPrometheus();

	let signupEmail = document.getElementById('signup-email');
	let signupButton = document.getElementById('signup-submit');

	let postSignupEmail = (email) => {
		return new Promise((resolve, reject) => {
			console.log(`Email: ${email}`);
			if (email) {
				if (email.indexOf('@') > -1) {
					database.saveSignupEmail(email).then(resolve).catch(reject);
				} else {
					reject('Please enter a valid email address.');
				}
			} else {
				reject('Please enter a valid email address.');
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
			let errMessage = `Something went wrong: ${err}`;
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