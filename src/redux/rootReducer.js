import { combineReducers } from 'redux'
import { LocatorReducer } from './WeatherLocator/reducer';
import { filterReducer } from './WeatherFilter/reducer'

const rootReducer = combineReducers({
  locator: LocatorReducer,
  filter: filterReducer  
})

export default rootReducer;

