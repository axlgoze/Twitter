//importando modulo necesario que llama a su vez al modulo user
const UserService = require('./../services/UserService')

class UserView{
	static createUser(payload){
		if(payload == null){
			console.log("Null is Error")
			return {error: "payload no existe"}
		}else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number'){
		    return UserService.create(payload.id, payload.username, payload.name)
		 }else{
		     return {error: "Ups, Las propiedades del payload necesitan tener un valor válido"}
		  }
	}
	
}

//exportando clase
module.exports = UserView
