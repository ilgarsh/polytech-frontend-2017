import React from 'react';
import ReactDOM from 'react-dom';
import './PhotoGetter.css';
import App from './PhotoGetter.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
