import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentLocation } from '../redux';
import WeatherBoard from './WeatherBoard';
import WeatherLocation from './WeatherLocation';
import WeatherSpinner from './WeatherSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';

function WeatherLocator(){
    const isLoading = useSelector(state => state.locator.loading);
    const hasError = useSelector(state => state.locator.error);
    const dispatch = useDispatch();
    let board, spinner, error;

    //Fetch location details    
    useEffect(()=>{
        dispatch(fetchCurrentLocation());
    }, []);
    
    spinner = (isLoading)? <WeatherSpinner/> : '';
    board = (!hasError) ? <WeatherBoard/> : <WeatherLocation/>;
   
    return(
        <div>  
            { isLoading ? spinner : board }
        </div>
    );
}

export default WeatherLocator;
