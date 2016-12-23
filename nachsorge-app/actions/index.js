/*
 * action types
 */

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

/*
 * action creators
 */

export const changeLanguage = (language) => {
  return { type: CHANGE_LANGUAGE, language }
}
