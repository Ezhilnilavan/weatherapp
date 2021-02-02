import { 
    SET_DEFAULT_PLATE, 
    GET_DEFAULT_PLATE   
  } from './actionTypes';
  
  const initialState = { 
    selected: '' 
  }
    
  const filterReducer = (state = initialState, action) => {
      switch(action.type) {
        case SET_DEFAULT_PLATE:
          return { 
            ...state,         
            selected: action.payload
          }             
        default:
          return state
      }
    }
  
    export { filterReducer };