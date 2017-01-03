import { combineReducers } from 'redux'

import midata from './midata'
import meetings from './meetings'
import settings from './settings'
import schemes from './schemes'

const reducer = combineReducers({
  midata,
  meetings,
  settings,
  schemes
})

export default reducer