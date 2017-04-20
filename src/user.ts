/**
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
import Person from './interfaces/person';
import Builder from './interfaces/builder';

class User implements Person, Builder<Person> {

	readonly firstName: string = User.defaults.firstName;
	readonly lastName: string = User.defaults.lastName;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	walk(): Person {
		console.log(`${this.toString()} is walking...`);
		return this;
	}

	talk(): Person {
		console.log(`${this.toString()} is talking...`);
		return this;
	}

	toString(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	new(): Person {
		return this;
	}

	static defaults: { firstName: string, lastName: string } = {
		firstName: "Default",
		lastName: "Default"
	}

}

export default User;
