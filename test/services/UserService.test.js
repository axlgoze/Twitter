const User = require('./../../app/services/UserService')

describe('Test for UserService Class', () =>{
	test('Create an UserService Object', () =>{
		//código a probar
		const userService = new UserService('id','userName','name','bio','dateCreated','lastUpdated')
		//recivido--esperado
		expect(userService.id).not.toBeUndefined()
	});
})

