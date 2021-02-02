# weatherapp - React JS

Weather application - REACT JS, REDUX, Webpack, Openweather API

How to Run:
===========

Run this from root directory

Make sure all files (.babelrc, webpack.config.js and package.json) are copied properly 

Install application and dependencies 

> npm install

> Create 'dist' folder under root folder( Webpack distination folder path )

> Update API keys in src/redux/configs.js

export const CAGE_API_PATH = 'https://api.opencagedata.com/geocode/v1/json?key=APIKEY';

export const OPEN_WEATHER_API_PATH = 'https://api.openweathermap.org/data/2.5/forecast?appid=APIKEY&units=imperial';


Build and Start webpack dev server

> npm run build


User Flow 1 - User with location sharing / service disabled (browser)
=====================================================================

If location sharing is disabled in browser, application will ask you to enter the location details manually.

Enter your location details. Example : Charlotte, US or Chennai, IN


User Flow 2 - User with location sharing / service enabled
==========================================================

Step1: Using browser geolocation API, application will collect browser position (latitude, longitude)

Step2: Using collected latitude, longitude in step1, application will fetch 'location' details from CAGE API.

Step3: Using the retrieved location (city, country code) details, application will request for Weather data from Openweather API service.

Step4: Weather report will be displayed for the current and next 4 days.

Refer attched screens for your reference.

