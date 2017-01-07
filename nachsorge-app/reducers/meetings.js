import { 
	ADD_MEETING,
	UPDATE_MEETING_APPOINTED_DATE,
	UPDATE_MEETING_COMPLETED,
	RESET
} from '../actions'

const initialState = []

const meetings = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEETING:
			return [action.meeting, ...state]
		case UPDATE_MEETING_APPOINTED_DATE:
			return state.map(meeting => {
				if(meeting.id === action.payload.id) {
					return {...meeting, dateAppointed: action.payload.date}
				}
				return meeting
			})
		case UPDATE_MEETING_COMPLETED:
			return state.map(meeting => {
				if(meeting.id === action.meetingId) {
					return {...meeting, completed: true}
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