import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <h1> Hello, {formatName(user)} ! </h1>
  );
}

function formatName (user) {
  return user.fname + ' ' + user.lname;
}

const user = {
  fname : 'Harper',
  lname : 'Perez'
};

const element = <h1> Hello, {formatName(user)} ! </h1>;

export default App;
