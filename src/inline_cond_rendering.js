import React from 'react';
import ReactDOM from 'react-dom';

class LogInOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages : ['React' , 'Re:React', 'Re:Re:React']
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
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


    render () {
        const isLoggedIn = this.state.isLoggedIn;
        return(
            <div>
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

export default LogInOut;

/*const messsages = ['React' , 'Re:React', 'Re:Re:React'];
ReactDOM.render(
    <Mailbox unreadmessages = {messages} />,
    document.getElementById('root')  
);*/