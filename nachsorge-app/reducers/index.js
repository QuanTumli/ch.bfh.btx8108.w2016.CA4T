import { combineReducers } from 'redux'

import midata from './midata'
import meetings from './meetings'
import settings from './settings'
import schemes from './schemes'
import doctors from './doctors'

const reducer = combineReducers({
  midata,
  meetings,
  settings,
  schemes,
  doctors
})

export default reducer