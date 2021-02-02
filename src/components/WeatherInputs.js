import React, {useEffect, useState} from 'react';
import { fetchCurrentLocation } from '../redux';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function WeatherInputs() {
    const [location, setLocation] = useState("");
    const dispatch = useDispatch();
    let board, spinner, error;

    const hasError = useSelector(state => state.locator.error);
    error = (!hasError) ? '' : <Alert variant='warning'>{hasError}</Alert>;

    //Fetch location details based on user input
    const search = () =>{
        if(location){
            let locationArray = location.split(',').map(item=>item.trim());
            let locationObj = Object.assign({}, {
                city: locationArray[0], 
                country_code: locationArray[1]
            }); 
            dispatch(fetchCurrentLocation(locationObj));
        }
    };

    const onKeyEnter = (event)=> {
        if (event.charCode === 13) {
            search();
        }
    }

    return (
        <div className="p-3 my-3 border page-margin">
            {error}
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Enter your location details (Ex : Charlotte, US)"
                    aria-label="Location"
                    aria-describedby="hint" 
                    value={location}  
                    onChange={e => setLocation(e.target.value)} 
                    onKeyPress={ e => onKeyEnter(e)}        
                />
                <InputGroup.Append>
                    <Button 
                    variant={location ? "primary": "secondary"}
                    onClick={()=>{ search() }}                   
                    >GO</Button>
                </InputGroup.Append>
            </InputGroup>

            <div id="hint" aria-hidden="true" className="d-none">Enter your location details to fetch weather report</div>
        </div>
    )
}

export default WeatherInputs
