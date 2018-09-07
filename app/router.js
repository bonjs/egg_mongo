'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const {
		router,
		controller
	} = app;
	router.get('/', controller.home.index);
	router.get('/add', controller.home.add);
	router.get('/addForm', controller.home.addForm);
	router.get('/del', controller.home.del);
};
