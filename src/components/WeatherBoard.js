import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherLocation from './WeatherLocation';
import WeatherDaily from './WeatherDaily';
import 'bootstrap/dist/css/bootstrap.min.css';

function WeatherBoard(){ 
     return(
        <div className="full-width">
            <div className="padding">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card card-weather">
                            <WeatherLocation/>
                            <WeatherDaily/>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default WeatherBoard;
