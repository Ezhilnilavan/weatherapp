import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherInputs from './WeatherInputs';
import WeatherData from './WeatherData';
import WeatherGraph from './WeatherGraph';

function WeatherLocation() {
    const [location, setLocation] = useState("Charlotte, US");
    const [date, setDate] = useState("Friday");
    const [time, setTime] = useState("02 AM");
    const [weather, setWeather] = useState("Cloudy");
    const [temp, setTemp] = useState("57");
    let selectedPlate = [];
    let dailyData = [];

    const hasError = useSelector(state => state.locator.error);

    const capitalize = (str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const { id, max } = useSelector(state => state.filter.selected);
    const  output = useSelector(state => {
        const { weatherData } = state.locator.weatherData;
        if(weatherData && id){
            Object.entries(weatherData).forEach(([key, value], index) => {                
                Object.entries(value).forEach(([k,v], index) =>{
                    if(v.id == id){
                        dailyData.push(Object.assign({}, {
                            name: v.date.time,
                            max: v.tmp_max,
                            min: v.tmp_min
                        }));
                    }
                    if(v.id == id && v.tmp_max == max){
                        selectedPlate.push(v);
                    }
                });
            });
            return selectedPlate[0];
        }
    });  

    return (   
        <div>    
            <div className="card-body">
                <div className="justify-left">  
                    { hasError? <WeatherInputs/> : <div>{output ? <WeatherData data={output}/> : ''}</div> }
                </div>
            </div>
            {
               !dailyData? '': 
                <div className="card-body">
                    <div className="justify-left"> 
                        <WeatherGraph data={dailyData}/>
                    </div>
                </div>
            }
        </div>
        
    )
}

export default WeatherLocation;
