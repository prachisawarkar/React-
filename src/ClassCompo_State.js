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
function FormattedDate(props) {
    return <h2>It is { props.date.toLocaleTimeString() }</h2>;
}

class Clock extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            date : new Date()
        };
    }

    // Lifecycle methods 
    // 1. componentDidMount  2. componentWillUnmount
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick() ,1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date : new Date()
        });
    }

    render() {
        return(
            <div>
                <h3>Hello, World! This is from State and Lifecycle.</h3>
                <FormattedDate date = {this.state.date} />
            </div>
        );
    }
}

ReactDOM.render(
    <Clock /> ,
    document.getElementById('state_components')
) ;


