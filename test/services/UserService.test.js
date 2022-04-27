const User = require('./../../app/services/UserService')

describe('Test for UserService Class', () =>{
	test('Create  empty Object', () =>{
		//código a probar
		const user = new UserService('id','username','name')
		//recibido--esperado
		expect(user.id).not.toBeUndefined()
		expect(user.userName).not.toBeUndefined()
		expect(user.name).not.toBeUndefined()
	});
})

