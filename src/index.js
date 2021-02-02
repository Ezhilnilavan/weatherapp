import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import WeatherLocator from './components/WeatherLocator';

function App(){       
    return(
        <Provider store={store}>
            <WeatherLocator></WeatherLocator>
        </Provider>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));

