let Database = (firebase, config) => {

	let ScarletHacksFirebase = firebase.initializeApp(config, 'ScarletHacks Database');
	let prometheus = Prometheus(config);
	
	let database = {

		getPrometheus: () => {
			return prometheus;
		}

	}

	return database;
}

export {Database};