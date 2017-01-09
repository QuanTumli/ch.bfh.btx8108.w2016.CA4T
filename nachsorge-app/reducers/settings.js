import {
	UPDATE_LANGUAGE,
	UPDATE_AFFLICTION,
	UPDATE_OPDATE,
	UPDATE_SCHEMA,
	UPDATE_SCHEMA_LOADED,
	RESET_SCHEME_SETTINGS,
	UPDATE_MIDATA_ENABLED,
	UPDATE_TNM_ENABLED,
	UPDATE_FASTER_NOTIFICATION_ENABLED,
	UPDATE_KOLOSKOPIE,
	RESET
} from '../actions'

const initialState = {
  language: 'de',
	schemaLoaded: false,
	affliction: null,
	opDate: null,
	schema: null,
	koloskopie: null,
	midataEnabled: false,
	tnmEnabled: false,
	fasterNotificationEnabled: false
}

const settings = (state = initialState, action) => {
  switch (action.type) {
		case RESET_SCHEME_SETTINGS:
      return {
        ...state,
				schemaLoaded: false,
				affliction: null,
				opDate: null,
				schema: null,
				koloskopie: null
      }
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
		case UPDATE_KOLOSKOPIE:
      return {
        ...state,
        koloskopie: action.isKoloskopie
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
		case UPDATE_MIDATA_ENABLED:
      return {
        ...state,
        midataEnabled: action.midataEnabled
      }
		case UPDATE_TNM_ENABLED:
			return {
				...state,
				tnmEnabled: action.tnmEnabled
			}
		case UPDATE_FASTER_NOTIFICATION_ENABLED:
			return {
				...state,
				fasterNotificationEnabled: action.fasterNotificationEnabled
			}
		case RESET:
    	return initialState
    default:
      return state;
  }
}

export default settings
