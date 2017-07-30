import {database} from './database';

console.log('Welcome to ScarletHacks.');

let signupEmail = document.getElementById('signup-email');
let signupButton = document.getElementById('signup-submit');

console.log(database);

let postSignupEmail = (email) => {
	return new Promise((resolve, reject) => {
		console.log(`Email: ${email}`);
		if (email) {
			if (email.indexOf('@') > -1) {
				setTimeout(() => {
					resolve();
				}, 1000);
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
		vex.dialog.alert(err);
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