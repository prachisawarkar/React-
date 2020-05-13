import React from 'react';
import ReactDOM from 'react-dom';

/*
Five steps to convert function component into class compoennt

1. Create an ES6 class, with the same name, that extends React.Component.
2. Add a single empty method to it called render().
3. Move the body of the function into the render() method.
4. Replace props with this.props in the render() body.
5. Delete the remaining empty function declaration.

*/
class Clock extends React.Component { 
    render() {
        return(
            <div>
                <h3>Hello, World! This is from State and Lifecycle.</h3>
                <h4>It is {this.props.date.toLocaleTimeString()}.</h4>
            </div>
        );
    }
}

function ticktick() {
    ReactDOM.render(
        <Clock date = {new Date()} /> ,
        document.getElementById('state_components')
    ) ;
}

setInterval(ticktick, 40);