import React from 'react';
import ReactDOM from 'react-dom';

class LogInOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages : ['React' , 'Re:React', 'Re:Re:React'],
            showWarning : true
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleLoginClick(){
        this.setState({
            isLoggedIn : true
        });
    }

    handleLogoutClick(){
        this.setState({
            isLoggedIn : false
        });
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning : !state.showWarning
        }));
    }

    render () {
        const isLoggedIn = this.state.isLoggedIn;
        return(
            <div>
            <WarningBanner warn = {this.state.showWarning} />
            <button onClick = {this.handleToggleClick}> {this.state.showWarning ? 'Hide' : 'Show' }</button>
                The user is  <b> {isLoggedIn ? 'currently' : 'not'} </b> logged in.            
                {isLoggedIn ? <Mailbox unreadmessages = {this.state.messages} /> : '' } 
        
                {isLoggedIn 
                    ? <LogoutButton onClick = {this.handleLogoutClick} />
                    : <LoginButton onClick = {this.handleLoginClick} />
                }
            </div>
        );
    }
}
function Mailbox(props) {
    const unreadmessages = props.unreadmessages;
    return (
        <div>
            <h2>Hello! </h2>
            {unreadmessages.length > 0 && 
                <h4>You have {unreadmessages.length} unread messsages.</h4>
            }
        </div>
    );
}

function LoginButton(props) {
    return (
        <button onClick = {props.onClick} > Login </button>
    );
}

function LogoutButton(props) {
    return(
        <button onClick = {props.onClick} > Logout </button>
    );  
}

function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }
    return (
        <div  className = "warning">
            Warning!
        </div>
    );
}

export default LogInOut;

/*const messsages = ['React' , 'Re:React', 'Re:Re:React'];
ReactDOM.render(
    <Mailbox unreadmessages = {messages} />,
    document.getElementById('root')  
);*/