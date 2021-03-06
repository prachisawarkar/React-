import React from 'react';

/*class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            essay_value : 'Please write an essay about your favourite DOM element.'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            essay_value : event.target.essay_value
        });
    }

    handleSubmit(event) {
        alert("Topic is: " + this.state.essay_value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    TOPIC: <br />
                    <textarea value = {this.state.essay_value} onChange = {this.handleChange} />
                </label>
                <input type = 'submit' value = 'Submit' />
            </form>
        );
    }
}*/

/*class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            flavor :  'coconut'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        alert(this.state.name + ' your email is : ' + this.state.email + ' your favourite flavor is : ' + this.state.flavor);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label> Name : <br /> <br />
                    <input type = 'text' value =  {this.state.name} name = 'name' onChange = {this.handleChange} />       
                </label> <br /> <br />
                <label> Email : <br /> <br />
                    <input type = 'email' value =  {this.state.email} name = 'email' onChange = {this.handleChange} />       
                </label> <br /> <br />
                <label> Pick your favorite flavor : <br /> <br />
                    <select name = 'flavor' value = {this.state.flavor} onChange = {this.handleChange} >
                        <option value = 'grapefruit'>Grapefruit</option>
                        <option value = 'lime'>Lime</option>
                        <option value = 'coconut'>Coconut</option>
                        <option value = 'mango'>Mango</option>
                    </select>
                </label>
                <input type = 'submit' value = 'Submit' />
            </form>
        );
    }
}*/

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing : true,
            numberOfGuest : 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing'?target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        });
    }

    handleSubmit(event) {
        alert('There are total ' + this.state.numberOfGuest + ' guests');
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label> Is Going : <br /> 
                    <input type = 'checkbox' name = 'isGoing' checked = {this.state.isGoing} onChange = {this.handleInputChange} />
                </label> <br />
                <label> Enter the number of guests : <br /> <br />
                    <input type = 'number' name = 'numberOfGuest' onChange = {this.handleInputChange} value = {this.state.numberOfGuest} />
                </label>
                <input type = 'submit' value = 'Submit' />
            </form>
        );
    }
}

export default Reservation;