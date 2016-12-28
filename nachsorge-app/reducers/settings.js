import { 
	UPDATE_LANGUAGE,
	UPDATE_AFFLICTION,
	UPDATE_OPDATE,
	UPDATE_SCHEMA,
	UPDATE_SCHEMA_LOADED
} from '../actions'

const initialState = {
  language: 'de',
	schemaLoaded: false,
	affliction: null,
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
		case UPDATE_AFFLICTION:
      return {
        ...state,
        affliction: action.affliction
      }
		case UPDATE_OPDATE:
      return {
        ...state,
        opDate: action.opDate
      }
		case UPDATE_SCHEMA:
      return {
        ...state,
        schema: action.schema
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