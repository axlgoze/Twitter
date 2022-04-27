//importando clase que necesitaremos para hacer pruebas
const UserView = require('./../../app/views/UserView')

describe('Test for UserView class', () =>{
	test('0) Create an empty object', ()=>{
		const user = UserView.createUser()
		expect(user.id).toBeUndefined()
		expect(user.username).toBeUndefined()
		expect(user.name).toBeUndefined()
		expect(user.bio).toBeUndefined()
		expect(user.lastUpdated).toBeUndefined()
		expect(user.dateCreated).toBeUndefined()
	});
})
