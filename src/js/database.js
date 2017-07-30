let Database = (firebase, config) => {

	let ScarletHacksFirebase = firebase.initializeApp(config, 'ScarletHacks Database');
	config.localhost = false;
	let prometheus = Prometheus(config);
	let db = ScarletHacksFirebase.database();

	let database = {

		init: () => {
			return new Promise((resolve, reject) => {
				firebase.auth().signInAnonymously().catch((err) => {
					console.error(err.code, err.message);
					reject(err);
				});
				firebase.auth().onAuthStateChanged((user) => {
					if (user) {
						prometheus.logon(user.uid);
						resolve(user);
					} else {
						console.log('User is signed out.');
					}
				});
			});
		},

		getPrometheus: () => {
			return prometheus;
		},

		saveSignupEmail: (email) => {
			return db.ref('email-signups').push({
				email: email,
				timestamp: Date.now()
			});
		}

	}

	return database;
}

export {Database};