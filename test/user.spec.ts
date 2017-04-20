/**
*	Example TS test
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
import * as sinon from 'sinon';
import { assert } from 'chai';
import User from '../src/user';

describe('namespace', function() {

	before(() => {

	});

	after(() => {

	});

	describe('some()', () => {

		it('Should do something', () => {
			let user = new User("John", "Doe");
			user.walk().talk();
		});

	});

});
