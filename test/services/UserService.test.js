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
		expect(userInfoList[0]).toBe(1)
		expect(userInfoList[1]).toBe("JhonnyReyes")
		expect(userInfoList[2]).toBe("Jhon")
		expect(userInfoList[3]).toBe("Sin Bio")
	});
	test('3) updating username value',() =>{
	const user = UserService.create(1,"NickCave","Nick")
	UserService.updateUserName(user, "CaveNick")
	expect(user.username).toBe("CaveNick")
	});
	test('4) Getting list of all usernames', () =>{
		const user1 = UserService.create(1,"NickCave1","Nick")
		const user2 = UserService.create(1,"NickCave2","Nick")
		const user3 = UserService.create(1,"NickCave3","Nick")
		const usernames = UserService.getAllUsersNames([user1,user2,user3])
		expect(usernames).toContain("NickCave1")
		expect(usernames).toContain("NickCave2")
		expect(usernames).toContain("NickCave3")
	});
})

