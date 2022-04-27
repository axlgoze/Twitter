const User = require('./../../app/models/User')
describe('2) getters', () =>{
	test('Add getters', () =>{
	const user = new User(1,"Axel Reyes", "Brayan", "Bio")
	expect(user.getUsername).toBe("Axel Reyes")
	expect(user.getBio).toBe("Bio")
	expect(user.getDateCreated).not.toBeUndefined()
	expect(user.getLastUpdated).not.toBeUndefined()

});



})
