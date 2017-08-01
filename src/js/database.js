let Database = (config) => {

	let ScarletHacksFirebase = firebase.initializeApp(config, 'ScarletHacks Database');
	
	let db = ScarletHacksFirebase.database();
	let auth = ScarletHacksFirebase.auth();
		config.localhost = true;
		config.noScreenshots = true;
	let prometheus = Prometheus(config, ScarletHacksFirebase);

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
			let uid = auth.currentUser.uid;
			prometheus.save({
				type: 'SIGNUP_EMAIL',
				email: email
			});
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