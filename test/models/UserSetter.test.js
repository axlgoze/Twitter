const User = require('./../../app/models/User')

describe('Test for Setters', () =>{
	test('4) Add setters', () =>{
		const user = new User(1,"Axel Reyes", "Axel", "Bio")
		user.setUsername = "Reyes"
		expect(user.username).toBe("Reyes")
		user.setBio = "New Bio"
		expect(user.bio).toBe("New Bio")
	});
})
