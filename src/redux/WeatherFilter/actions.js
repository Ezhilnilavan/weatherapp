import { useAxios } from "../Axios";
import moment from 'moment';

import { 
    SET_DEFAULT_PLATE, 
    GET_DEFAULT_PLATE
} from './actionTypes';

//Action creators
export const setDefaultPlate = (id) => {
  return {
    type: SET_DEFAULT_PLATE,
    payload: id
  }
}

export const getDefaultPlate = () => {
  return {
    type: GET_DEFAULT_PLATE   
  }
}


