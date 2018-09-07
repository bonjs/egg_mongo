'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {

		var data = await this.ctx.model.User.find({});

		await this.ctx.render('index', {
			data : data
		});
	}

	async addForm() {
		await this.ctx.render('addForm');
	}
	async add() {

		var username = this.ctx.query.username;

		console.log(username);

		var user = new this.ctx.model.User({
			username : username
		});

		//保存数据库
		await user.save();
		
		this.ctx.redirect('back');
	}

	async del() {
		var id = this.ctx.query.id;
		var User = this.ctx.model.User;
		var d = await User.deleteOne({
			_id : id
		});
		
		this.ctx.body = d
	}
}

module.exports = HomeController;
