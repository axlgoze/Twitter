const UserService = require('./../../app/services/UserService')

describe('Test for UserService Class', () =>{
	test('Create  empty Object', () =>{
		//código a probar
		const user = new UserService('id','username','name')
		//recibido--esperado
		expect(user.id).not.toBeUndefined()
		expect(user.username).not.toBeUndefined()
		expect(user.name).not.toBeUndefined()
	});
	test('2) Create a new user Using the UserService', () =>{
		const user = new UserService.create(1,"axelReyes","Axel")
		expect(user.id).toBe(1)
		expect(user.username).toBe("axelReyes")
		expect(user.name).toBe("Axel")
		expect(user.bio).not.toBeUndefined()
	});
})

