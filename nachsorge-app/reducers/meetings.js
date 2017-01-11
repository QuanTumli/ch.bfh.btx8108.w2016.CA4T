import { 
	ADD_MEETING,
	UPDATE_MEETING_APPOINTED_DATE,
	UPDATE_MEETING_COMPLETED,
	UPDATE_MEETING_TREATING_DOCTOR,
	REMOVE_TREATING_DOCTOR_FROM_ALL_MEETINGS,
	RESET_SCHEME_SETTINGS,
	MIDATA_GET_EXPORT_SUCCESS,
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
					return {...meeting, dateAppointed: action.payload.date.toString()}
				}
				return meeting
			})
		case UPDATE_MEETING_TREATING_DOCTOR:
			return state.map(meeting => {
				if(meeting.id === action.payload.meetingId) {
					return {...meeting, treatingDoctor: action.payload.doctorId}
				}
				return meeting
			})
		case REMOVE_TREATING_DOCTOR_FROM_ALL_MEETINGS:
			return state.map(meeting => {
				if(meeting.treatingDoctor === action.payload.id) {
					return {...meeting, treatingDoctor: null}
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
		case MIDATA_GET_EXPORT_SUCCESS:
			return action.data.meetings
		case RESET_SCHEME_SETTINGS:
		case RESET:
    	return initialState
    default:
      return state;
  }
}

export default meetings