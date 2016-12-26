import { 
	UPDATE_LANGUAGE, 
	UPDATE_OPDATE,
	UPDATE_SCHEMA,
	UPDATE_SCHEMA_LOADED
} from '../actions'

const initialState = {
  language: 'de',
	schemaLoaded: false,
	opDate: null,
	schema: null
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LANGUAGE:
      return {
        ...state,
        language: action.language
      }
		case UPDATE_OPDATE:
      return {
        ...state,
        opDate: action.opDate
      }
		case UPDATE_SCHEMA:
      return {
        ...state,
        opDate: action.schema
      }
		case UPDATE_SCHEMA_LOADED:
      return {
        ...state,
        schemaLoaded: action.isLoaded
      }
    default:
      return state;
  }
}

export default settings