const User = require('./../../app/models/User')

describe("Unit test for User class", () => {
	test('Create an User object', () => {
	   //aqui va el código que usaras en tu app
	   const user = new User(1,'Axl Reyes','Axel','Bio','dateCreated','lastUpdated');
	   
	   //results validaton
	   //comparacion que iguala el valor izquierdo con el valor derecho (esperado)
	   expect(user.id).toBe(1)
	   expect(user.username).toBe("Axl Reyes")
	   expect(user.name).toBe("Axel")
	   expect(user.bio).toBe("Bio")
	   expect(user.dateCreated).toBe("dateCreated")
	   expect(user.lastUpdated).toBe("lastUpdated")
	});
})
