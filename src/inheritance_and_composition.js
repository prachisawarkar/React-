import React from 'react';

// #1
function FancyBorder(props) {
    return (
        <div className = {'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color = 'blue'> 
            <h1 className = 'Dialog-title'>Welcome</h1>
            <p className = "Dialog-message">
                Thank you for visiting out spacecraft.
            </p>
        </FancyBorder>
    );
}

/*export default WelcomeDialog;*/

// #2
function SplitPane(props) {
    return (
        <div className = 'SplitPane'>
            <div className = 'SplitPane-left'>
                {props.left}
            </div>
            <div className = 'SplitName-right'>
                {props.right}
            </div>
        </div>
    )
}

function Contacts() {
    return <h3>Payal Ghode <br /> Honey Sinha</h3>
}
function Chat() {
    return(
        <p> Hello, How are you <br />
            Hii I am good! <br />
            How are you? <br />
            I am good to. </p>
    );
}

function Composition_App() {
    return (
        <SplitPane
            left = {<Contacts />}
            right = {<Chat />}
        />
    );
}

/*export default Composition_App;*/

// #3
function Dialog(props) {
    return (
        <FancyBorder color = 'blue'>
            <h1 className = 'Dialog-title'>
                {props.title}
            </h1>
            <p className = 'Dialog-message'>
                {props.message}
            </p>
            {props.children}
        </FancyBorder>       
    );
}

class WelcomeDialog1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    render() {
        return (
            <Dialog 
                title = 'Welcome'
                message = ' Thank you for visiting our spacecraft.'
            >
                <input type = 'text'
                    value = {this.state.login}
                    onChange = {this.handleChange}
                />
                <button onClick = {this.handleSignUp}>
                    Sign me Up!
                </button>
            </Dialog>
        );
    }

    handleChange(event) {
        this.setState({
            login : event.target.value
        });
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

export default WelcomeDialog1;