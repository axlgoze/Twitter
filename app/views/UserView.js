//importando modulo necesario que llama a su vez al modulo user
const UserService = require('./../services/UserService')

class UserView{
	static createUser(user){
		return new UserService(1,"AxelFlores","Brayan","Sin bio")
	}
}

//exportando clase
module.exports = UserView
