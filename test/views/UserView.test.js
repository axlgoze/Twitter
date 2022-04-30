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
	test('1) Return an error object when try to create a new user with an null payload',()=>{
		const payload = null
		const result = UserView.createUser(payload)
		expect(result.error).toMatch(/payload no existe/)
	});
	test('2) Return an error objetct when try to create a new user with a payload whit invalid propierties', ()=>{
		const payload ={username: null, name: 12, id: "id"}
		const result = UserView.createUser(payload)
		expect(result.error).toMatch(/Ups, Las propiedades del payload necesitan tener un valor válido/)
	});
	test('3) Return an error object when try to create a new user with a payload with mission propierties', () =>{
		const payload = {username: "Username"}
		const result = UserView.createUser(payload)
		expect(result.error).toMatch(/necesitan tener un valor válido/)
	});

})
