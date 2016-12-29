/*
 * action types
 */
 
export const RESET_SCHEME_SETTINGS = 'RESET_SCHEME_SETTINGS'
export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE'
export const UPDATE_AFFLICTION = 'UPDATE_AFFLICTION'
export const UPDATE_OPDATE = 'UPDATE_OPDATE'
export const UPDATE_SCHEMA = 'UPDATE_SCHEMA'
export const UPDATE_SCHEMA_LOADED = 'UPDATE_SCHEMA_LOADED'

export const ADD_MEETING = 'ADD_MEETING'
export const UPDATE_MEETING = 'UPDATE_MEETING'

export const LOAD_SCHEMAS = 'LOAD_SCHEMAS'


export const RESET = 'RESET'

/*
 * action creators
 */

export const resetSchemeSettings = () => {
   return { type: RESET_SCHEME_SETTINGS }
 }
 
export const updateLanguage = (language) => {
  return { type: UPDATE_LANGUAGE, language }
}

export const updateAffliction = (affliction) => {
  return { type: UPDATE_AFFLICTION, affliction }
}

export const updateOpDate = (opDate) => {
  return { type: UPDATE_OPDATE, opDate }
}

export const updateSchema= (schema) => {
  return { type: UPDATE_SCHEMA, schema }
}

export const updateSchemaIsLoaded= (isLoaded) => {
  return { type: UPDATE_SCHEMA_LOADED, isLoaded }
}

export const addMeeting = (meeting) => {
  return { type: ADD_MEETING, meeting }
}

export const updateMeeting = (meeting) => {
  return { type: UPDATE_MEETING, meeting }
}

export const loadSchemas = (schemas) => {
  return { type: LOAD_SCHEMAS, schemas }
}

export const resetStore = () => {
  return { type: RESET }
}