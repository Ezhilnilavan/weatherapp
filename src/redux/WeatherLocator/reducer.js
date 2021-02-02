import { 
  FETCH_LOCATION_REQUEST, 
  FETCH_LOCATION_SUCCESS, 
  FETCH_LOCATION_FAILURE 
} from './actionTypes';

const initialState = { 
  weatherData: '' 
}
  
const LocatorReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_LOCATION_REQUEST:
        return { 
          ...state,         
          loading: true,
          error: false
        }
      case FETCH_LOCATION_SUCCESS:
        return {
          ...state,
          loading: false,
          weatherData: action.payload,
          error: false
        }
        break;
      case FETCH_LOCATION_FAILURE:
        return {
          ...state,
          loading: false,
          weatherData: '',
          error: action.payload
        }
        break;
      default:
        return state
    }
  }

  export { LocatorReducer };