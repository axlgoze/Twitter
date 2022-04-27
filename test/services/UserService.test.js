const UserService = require('./../../app/services/UserService')

describe('Test for UserService Class', () =>{
	test('0) Create  empty Object', () =>{
		//código a probar
		const user = UserService.create('id','username','name')
		//recibido--esperado
		expect(user.id).not.toBeUndefined()
		expect(user.username).not.toBeUndefined()
		expect(user.name).not.toBeUndefined()
	});
	test('1) Create a new user Using the UserService', () =>{
		const user = UserService.create(1,"axelReyes","Axel")
		expect(user.id).toBe(1)
		expect(user.username).toBe("axelReyes")
		expect(user.name).toBe("Axel")
		expect(user.bio).not.toBeUndefined()
	});
	test('2) getting a list of all values', () =>{
		//primero se crea el obejto
		const user = UserService.create(1,"JhonnyReyes","Jhon")
		//alamacena lista del 'user' usando metodo getInfo()
		const userInfoList = UserService.getInfo(user)
		expect(userInfoList.[0]).toBe(1)
		expect(userInfoList.[1]).toBe("JhonnyReyes")
		expect(userInfoList.[2]).toBe("Jhon")
		expect(userInfoList.[3]).toBe("Sin bio")
	});
})

