import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import LoginControl from './conditionalRendering';
import LogInOut from './inline_cond_rendering';
import * as serviceWorker from './serviceWorker';

//const messages = ['React' , 'Re:React', 'Re:Re:React'];
ReactDOM.render(
  <LogInOut />,
  document.getElementById('root')
);


//ReactDOM.render( AppTest, document.getElementById('component'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
