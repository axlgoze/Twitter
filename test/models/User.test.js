const User = require('./../../app/models/User')

describe("Unit test for User class", () => {
	test('Create an User object', () => {
	   //aqui va el código que usaras en tu app
	   const user = new User(1,'Axl Reyes','Axel','Bio');
	   
	   //results validaton
	   //comparacion que iguala el valor izquierdo con el valor derecho (esperado)
	   expect(user.id).toBe(1)
	   expect(user.username).toBe("Axl Reyes")
	   expect(user.name).toBe("Axel")
	   expect(user.bio).toBe("Bio")
	   expect(user.dateCreated).not.toBeUndefined() //verifica que el valor no sea indefinido
	   expect(user.lastUpdated).not.toBeUndefined()
	});

	//segunda prueba para clase User
	test('2) Add getters', () =>{
        const user = new User(1,"Axel Reyes", "Brayan", "Bio")
        expect(user.getUsername).toBe("Axel Reyes")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
	});

	//Tercera prueba
	   test('3) Add setters', () =>{
                const user = new User(1,"Axel Reyes", "Axel", "Bio")
                user.setUsername = "Reyes"
                expect(user.username).toBe("Reyes")
                user.setBio = "New Bio"
                expect(user.bio).toBe("New Bio")
        });
})
