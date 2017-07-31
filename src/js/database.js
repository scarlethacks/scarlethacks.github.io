let Database = (firebase, config) => {

	let ScarletHacksFirebase = firebase.initializeApp(config, 'ScarletHacks Database');
	config.localhost = false;
	let prometheus = Prometheus(config);
	let db = ScarletHacksFirebase.database();
	let auth = ScarletHacksFirebase.auth();

	let database = {

		initialized: false,
		
		init: (callback) => {
			auth.signInAnonymously().then((done) => {
				let user = database.getCurrentUser();
				prometheus.logon(user.uid);
				callback(user);
			}).catch((err) => {
				console.error(err.code, err.message);
				reject(err);
			});
		},

		getPrometheus: () => {
			return prometheus;
		},

		getCurrentUser: () => {
			return auth.currentUser;
		},

		saveSignupEmail: (email) => {
			let uid = firebase.auth().currentUser.uid;
			return db.ref(`email-signups`).push({
				email: email,
				timestamp: Date.now(),
				uid: database.getCurrentUser().uid
			});
		}

	}

	return database;
}

export {Database};