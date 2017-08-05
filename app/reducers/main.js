import * as types from '../actions/actionTypes';

const initialState = {
	main: 0
};

export default function main(state = initialState, action = {})
{
	switch (action.type) {

		case types.INCREMENT:
			return {
				...state,
				main: state.main + 1
			};

		case types.DECREMENT:
			return {
				...state,
				main: state.main - 1
			};

		default:
			return state;

	}
}
