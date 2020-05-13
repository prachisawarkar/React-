import React from 'react';
import ReactDOM from 'react-dom';

function Clock(props) {
    return(
        <div>
            <h3>Hello, World! This is from State and Lifecycle.</h3>
            <h4>It is {props.date.toLocaleTimeString()}.</h4>
        </div>
    );
}

function ticktick() {
    ReactDOM.render(
        <Clock date = {new Date()} /> ,
        document.getElementById('state_components')
    ) ;
}

setInterval(ticktick, 40);