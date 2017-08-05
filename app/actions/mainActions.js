import * as types from './actionTypes';

/**
 *
 * @returns {{type}}
 */
export function increment() {
	console.log('increment running');
	return {
		type: types.INCREMENT
	};
}

/**
 *
 * @returns {{type}}
 */
export function decrement() {
	console.log('decrement running');
	return {
		type: types.DECREMENT
	};
}
