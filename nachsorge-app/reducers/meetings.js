import { 
	ADD_MEETING,
	UPDATE_MEETING,
	RESET
} from '../actions'

const initialState = []

const meetings = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEETING:
			return [action.meeting, ...todos]
		case UPDATE_MEETING:
			return state.map(meeting => {
				if(meeting.id === action.meeting.id) {
					return action.meeting
				}
				return meeting
			})
		case RESET:
    	return initialState
    default:
      return state;
  }
}

export default meetings