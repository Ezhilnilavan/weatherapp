import { useAxios } from "../Axios";
import moment from 'moment';
import { 
  CAGE_API_PATH, 
  OPEN_WEATHER_API_PATH, 
  OPEN_WEATHER_ICON_PATH 
} from '../configs';
import { 
  FETCH_LOCATION_REQUEST, 
  FETCH_LOCATION_SUCCESS, 
  FETCH_LOCATION_FAILURE,
  ERROR_MSG 
} from './actionTypes';

//Fetch user position
const getCoordinates = (dispatch) => {
  return new Promise((resolve, reject) => {
    const geolocation = navigator.geolocation;
    if (!geolocation) {
      reject("browser", dispatch);
    }   
    geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords;          
      resolve({latitude, longitude});
    }, () => {
      reject ("browser", dispatch);
    }, {timeout:10000});
  });
}

//Fetch user location details
const getLocationDetails = ({latitude, longitude}) => { 
  return new Promise((resolve, reject)=>{
    useAxios.get(`${CAGE_API_PATH}&q=${latitude},${longitude}`)
    .then(response => {
      if(response && response.status == 200){
        const { city, country_code } = response.data.results[0].components;      
        resolve({ city, country_code });
      }else{
        reject("api");
      }
    })
  });
}

//Group weather data for rendering
const mapWeatherData = (response)=>{
  const { name, country } = response.data.city;
  let weatherResponse = [];
  
  let groupIndex =0
  const weatherGroups = Array.from(response.data.list).reduce((groups, item , index) => {
    let dateStr = moment(item.dt_txt).format('MM_DD_YYYY');
    const group = (groups[dateStr] || []);
    const { temp_min, temp_max } = item.main;    
    const { description, icon, id, main } = item.weather[0];
    let date = moment(new Date(item.dt_txt)).format('MMMM D, h:mm a');
    
    group.push({
      location: name + "," + country.toUpperCase(),
      date:{
        day: moment(date).format('dddd'),
        time: moment(date).format('hh A'),
        dayShort: moment(date).format('ddd')
      },
      description,
      icon : `${OPEN_WEATHER_ICON_PATH}${icon}.png`,
      id,
      main,
      tmp_min: Math.round(parseInt(temp_min)),
      tmp_max: Math.round(parseInt(temp_max))
    });
    
    groups[dateStr] = group;
    return groups;
  }, {});
  
  //Convert keys into ordered index 
  let dailyData = Object.entries(weatherGroups).map(([key, value]) => {
    return value;    
  });

  let weatherData = {
    city: name, 
    country, 
    weatherData: dailyData
  };
 
  return weatherData;
}

export const fetchCurrentLocation = (locationInput = "") => {
  let fetchAction, weatherData = {};
  return fetchAction = async (dispatch) => {
    try{
      //Show loading status
      dispatch(fetchLocationRequest());
      let location = {}

      //Fetch location details
      if(!locationInput){       
        const positionResponse = await getCoordinates(dispatch);
        const positions = await positionResponse; 
        const {latitude, longitude} = positions;
        const locationResponse = await getLocationDetails({latitude, longitude}); 
        location = await locationResponse;
      }else{
        location = locationInput;
      }
      
      //Fetch weather details
      const { city, country_code } = location; 
      useAxios.get(`${OPEN_WEATHER_API_PATH}&q=${city},${country_code}`)
      .then(response => {
        if(response && response.status == 200){
          weatherData = mapWeatherData(response);
          console.info(weatherData)
          dispatch(fetchLocationSuccess(weatherData));
        }else{
          dispatch(fetchLocationFailure(ERROR_MSG.notfound));
        }
      })
      .catch((response)=>{
        dispatch(fetchLocationFailure(ERROR_MSG.notfound));
      });
      
    }catch(err){
      if (!(err in ERROR_MSG)){
        dispatch(fetchLocationFailure(ERROR_MSG.unknown));
      }else{
        dispatch(fetchLocationFailure(ERROR_MSG[err]));
      }    
    } 
  }
}

export const fetchLocationRequest = () => {
  return {
    type: FETCH_LOCATION_REQUEST
  }
}

export const fetchLocationSuccess = location => {
  return {
    type: FETCH_LOCATION_SUCCESS,
    payload: location
  }
}

export const fetchLocationFailure = error => {
  return {
    type: FETCH_LOCATION_FAILURE,
    payload: error
  }
}

