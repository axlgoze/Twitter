//importando clase para no reescribirla
const User = require('./../models/user')

class UserService{
	constructor(id,username,name,bio){
		this.id=id
		this.username=username
		this.name=name
		this.bio=bio
		this.dateCreated=new Date()
		this.lastUpdated=new Date()
	}
}

module.exports = UserService
