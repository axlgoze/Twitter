//importando modulo necesario que llama a su vez al modulo user
cont UserService = require('./../service/UserService')

class UserView{
	static createUser(user){
		new user(1,"AxelFlores","Brayan")
	}
}

//exportando clase
module.exports = UserView
