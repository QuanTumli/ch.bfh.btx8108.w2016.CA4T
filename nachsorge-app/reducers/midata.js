import {
	MIDATA_LOGIN,
	MIDATA_LOGIN_SUCCESS,
	MIDATA_LOGOUT,
	RESET
} from '../actions'

const initialState = {
	authToken: null,
	loading: false,
	error: null,
	temperatures: []
}

/*
temperatures: [
{datetime: '2016-02-02 12:30', value: 38}
]

*/

const midata = (state = initialState, action) => {
  switch (action.type) {
    case MIDATA_LOGIN:
			return {
				...state,
				loading: true,
				error: null,
				authToken: null
			}
		case MIDATA_LOGIN_SUCCESS:
			return {
				...state,
				loading: true,
				error: null,
				authToken: action.authToken
			}
		case MIDATA_LOGOUT:
			console.log("logout...");
			return {
				...state,
				loading: false,
				error: null,
				authToken: null
			}
		case RESET:
    	return initialState
    default:
      return state;
  }
}

export default midata