import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherPlate from "./WeatherPlate";
import { setDefaultPlate } from '../redux';


function WeatherDaily({weatherGroups}) {
    let itemList=[];
    const [plates , setPlates] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        const iterateList = async (weatherGroups)=>{
            let count = 0;
            let output = Object.entries(weatherGroups).map(([key, value], index) => {
              let dailyData = {
                  id: value[0].id,
                  date: value[0].date,
                  min: value[0].tmp_min,
                  max: value[0].tmp_max,
                  icon: value[0].icon
              }  
              //Set default plate as first plate
              if(count == 0){
                dispatch(setDefaultPlate({
                    id: value[0].id,
                    max: value[0].tmp_max
                }));
              }
              count++;
              return <WeatherPlate key={index} data={dailyData}></WeatherPlate>   
            });                    
            setPlates(output);
        }
        if(weatherGroups){
            iterateList(weatherGroups);
        }
        
    }, [weatherGroups]);

    return (
        <div className="card-body p-3">
            <div className="d-flex weakly-weather">
            {plates}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weatherGroups: state.locator.weatherData.weatherData
    }
}
  
export default connect( mapStateToProps )(WeatherDaily);
