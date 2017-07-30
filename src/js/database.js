import {config} from './config';

let firebase = require('firebase');
let prometheusjs = require('prometheusjs');

console.log(config);

let Database = () => {

	let ScarletHacksFirebase = firebase.initializeApp(config, 'ScarletHacks Database');
	let prometheus = Prometheus(config);

	console.log(ScarletHacksFirebase);
	console.log(prometheus);

	let database = {

		getPrometheus: () => {
			return prometheus;
		}

	}

	return database;
}

let database = Database();

export {database};