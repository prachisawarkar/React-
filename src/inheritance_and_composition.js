import React from 'react';

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

export default Composition_App;