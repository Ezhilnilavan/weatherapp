import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setDefaultPlate } from '../redux';

function WeatherPlate(props) {
    const [ defaults, setDefaults ] = useState(false);
    const dispatch = useDispatch(); 
    const { id, max } = useSelector(state => state.filter.selected);
    
    //Update selected plate  details
    const postData = (targetEl, data)=>{
        const {id, max} = data;        
        dispatch(setDefaultPlate({
            id,
            max            
        }));
    }

    //Mark selected weather plate
    const clickable = (id == props.data.id && max == props.data.max) ? "weakly-weather-item default-bg clickable": "weakly-weather-item clickable"; 

    return (
        <div className={clickable} onClick={(e)=>{ postData(e.target, props.data)}}>
            <img src={props.data.icon} className="plate-icon"/>
            <p className="mb-0"> {props.data.date.dayShort} </p> <i className="mdi mdi-weather-cloudy"></i>
            <p className="mb-0"> {props.data.min}° - {props.data.max}° </p>
        </div>
    )
}

export default WeatherPlate
