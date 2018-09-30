import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Layer from './components/Layer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layer />, document.getElementById('root'));
registerServiceWorker();
