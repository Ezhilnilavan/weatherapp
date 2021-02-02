# weatherapp
Weather app using Openweather API

Weather application - 
Technologies: REACT JS, REDUX, bootstrap, Openweather API

How to Run:
===========

Run this from root directory
> npm install

Note: Make sure .babelrc, webpack.config.js and package.json are copied properly 

Build and Start
> npm run build

User Flow 1 - User with location service disabled (browser)
======================================================

If location sharing is disabled in browser, application will ask you to enter the location details manually.

Enter your location details. Example : Charlotte, US or Chennai, IN

User Flow 2 - User with location service enabled
===========================================

Step1: Using browser geolocation API, application will collect browser position (latitude, longitude)

Step2: Using collected latitude, longitude in step1, application will fetch 'location' details from CAGE API.

Step3: Using the retrieved location (city, country code) details, application will request for Weather data from Openweather API service.

Step4: Weather report will be displayed for the current and next 4 days.

