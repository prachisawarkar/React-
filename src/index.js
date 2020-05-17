import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import LoginControl from './conditionalRendering';
import Blog from './listitems';
import * as serviceWorker from './serviceWorker';

//const numbers = [1,2,3,4,5];
/*ReactDOM.render(
  <NumberList numbers = {numbers} />,
  document.getElementById('root')
)*/
const posts = [
  {id :1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts = {posts} />,
  document.getElementById('root')
)

//ReactDOM.render( AppTest, document.getElementById('component'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
