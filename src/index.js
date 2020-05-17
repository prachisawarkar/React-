import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import LoginControl from './conditionalRendering';
import List from './listitems';
import * as serviceWorker from './serviceWorker';

const numbers = [1,2,3,4,5];
ReactDOM.render(
  <List numbers = {numbers} />,
  document.getElementById('root')
)


//ReactDOM.render( AppTest, document.getElementById('component'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
