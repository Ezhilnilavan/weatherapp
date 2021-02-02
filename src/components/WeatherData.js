import React from 'react'

function WeatherData(props) {   
    const {day, time } = props.data.date
    const {location, main, icon, tmp_max } = props.data
    return (
        <div className="weather-plate">
            <h4 className="location-txt">{location}</h4>
            <h5>{day} {time}</h5>
            <h5>{main}</h5>            
            <div className="weather-data">
                <div className="mr-auto">
                 <div className="weather-icon">
                     <img src={icon}/> 
                     <span className="tmp-text">{tmp_max}<span className="symbol"><sup className="tmp-symbol">°F</sup></span></span>
                </div>                                            
                </div>
            </div>
        </div>
    )
}

export default WeatherData

