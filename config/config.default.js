'use strict';

module.exports = appInfo => {
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1536290131682_6759';

	// add your config here
	config.middleware = [];
	config.view = {
		defaultViewEngine : 'ejs',
		defaultExtension : '.ejs',
		mapping : {
			'.ejs' : 'ejs'
		}
	};
	exports.mongoose = {
		url : 'mongodb://tc.bonjs.com/my',
		options : {
			useNewUrlParser : true
		},
		loadModel : true,
		app : true,
		agent : false,
	};
	return config;
};
