import React from 'react';
import ReactDOM from 'react-dom';

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/style/App.css'

import registerServiceWorker from './registerServiceWorker';
import App from './app';


ReactDOM.render(<App/>, document.getElementById('app'))

registerServiceWorker();
