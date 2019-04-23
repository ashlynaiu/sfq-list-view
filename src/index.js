import React from 'react';
import ReactDOM from 'react-dom';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import './styles/app.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
