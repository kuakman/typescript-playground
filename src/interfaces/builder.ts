/**
*	@module interfaces
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
import Person from './person';

export default interface Builder<T extends Person> {
	new(): T;
}
