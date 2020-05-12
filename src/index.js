import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'))
}
setInterval(tick, 100);

// components in react
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

const welc = <Welcome name = 'Sara' />
ReactDOM.render(welc, document.getElementById('component'));
function AppTest() {
  return(
    <div>
      <Welcome name = 'Sara' />
      <Welcome name = 'Cahal' />
      <Welcome name = 'Tana' />
    </div>
  );
}

ReactDOM.render( <AppTest /> , document.getElementById('component'));
//Here we can't call like given below because its not a variable declared with const
//Its a function.
//ReactDOM.render( AppTest, document.getElementById('component'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
