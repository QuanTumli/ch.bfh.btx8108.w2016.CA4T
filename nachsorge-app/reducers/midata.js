import {
	MIDATA_LOGIN,
	MIDATA_LOGIN_SUCCESS,
	MIDATA_LOGOUT,
	MIDATA_SEND_TEMP,
	MIDATA_SEND_TEMP_SUCCESS,
	MIDATA_GET_TEMP,
	MIDATA_GET_TEMP_SUCCESS,
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
				loading: false,
				error: null,
				authToken: action.authToken
			}
		case MIDATA_LOGOUT:
			return {
				...state,
				loading: false,
				error: null,
				authToken: null
			}
		case MIDATA_SEND_TEMP:
			return {
				...state,
				loading: true
			}
		case MIDATA_SEND_TEMP_SUCCESS:
			return {
				...state,
				loading: false
			}
		case MIDATA_GET_TEMP:
			return {
				...state,
				loading: true
			}
		case MIDATA_GET_TEMP_SUCCESS:
			return {
				...state,
				loading: false,
				temperatures: action.data
			}
		case RESET:
    	return initialState
    default:
      return state;
  }
}

export default midata