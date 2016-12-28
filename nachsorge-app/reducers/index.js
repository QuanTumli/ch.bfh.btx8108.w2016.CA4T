import { combineReducers } from 'redux'

import meetings from './meetings'
import settings from './settings'
import schemes from './schemes'

const reducer = combineReducers({
  meetings,
  settings,
  schemes
})

export default reducer