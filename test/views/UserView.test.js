//importando clase que necesitaremos para hacer pruebas
const UserView require('./../../app/views/UserView')

describe('Test for UserView class', () =>{
	test('0) Create an empty object', ()=>{
		const user = UserView.create(1,"AxelFlores","Brayan")
		expect(user.id).not.toBeUndefined()
		expect(user.username).not.toBeUndefined()
		expect(user.name).not.toBeUndefined()
		expect(user.bio).not.toBeUndefined()
		expect(user.lastUpdated).not.toBeUndefined()
		expect(user.dateCreated).not.toBeUndefined()
	});
})
