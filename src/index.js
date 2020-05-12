import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comment from './Comment';
import * as serviceWorker from './serviceWorker';

// Simple Component - javascript functions
function tick() {
  const element = (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('component'))
}
setInterval(tick, 10000); //calling the tick() in setInterval()

// components in react
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

const welc = <Welcome name = 'Sara' />
/* ReactDOM.render(welc, document.getElementById('component')); */

function AppTest() {
  return(
    <div>
      <Welcome name = 'Sara' />
      <Welcome name = 'Cahal' />
      <Welcome name = 'Tana' />
    </div>
  );
}

/* ReactDOM.render( <AppTest /> , document.getElementById('component')); */
//Here we can't call like given below because its not a variable declared with const
//Its a function.

const comment = {
  text : 'I hope you enjoy learning React!',
  date : new Date(),
  author : {
      name : 'Hello Kitty',
      avatarUrl : 'https://placekitten.com/g/64/64',
  },
};

//calling the App.js file
ReactDOM.render(
  <React.StrictMode>
    <App /> {welc} <AppTest /> <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  </React.StrictMode>, 
  document.getElementById('root')
);

//ReactDOM.render( AppTest, document.getElementById('component'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
