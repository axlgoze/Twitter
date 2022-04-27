//importando clase para no reescribirla
const User = require('./../models/User')

class UserService{
	//metódo estático
	static create(id,username,name){
		return new User(id,username,name,"Sin Bio")
	}
	static getInfo(user){
		return  Object.values(user)
	}
	static updateUserName(user, username){
		user.setUsername = username
	}
}

module.exports = UserService
