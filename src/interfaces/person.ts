/**
*	@module interfaces
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
interface Person {
	readonly firstName: string;
	readonly lastName: string;
	readonly [prop: string]: any;

	get firstName(): string;
	get lastName(): string;

	walk(): Person;
	talk(): Person;
	toString(): string;
}

export default Person;
