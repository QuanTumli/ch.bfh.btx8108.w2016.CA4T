import { 
	ADD_DOCTOR,
	EDIT_DOCTOR,
	DELETE_DOCTOR,
	RESET
} from '../actions'

const initialState = [
	{
		id: 0,
		name: 'Dr. med. Hans Meier',
		tel: '030 400 40 40'
	}
]

const doctors = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCTOR:
			const newId = Math.max(0, ...state.map(d => d.id)) + 1
			const newDoctor = {
				id: newId,
				name: action.payload.name,
				tel: action.payload.tel
			}
			return [newDoctor, ...state]
		case EDIT_DOCTOR:
			return state.map(doctor => {
				if(doctor.id === action.payload.id) {
					return {id: doctor.id, name: action.payload.name, tel: action.payload.tel}
				}
				return doctor
			})
		case DELETE_DOCTOR:
			return state.filter(doctor => doctor.id !== action.payload.id);
		case RESET:
    	return initialState
    default:
      return state;
  }
}

export default doctors