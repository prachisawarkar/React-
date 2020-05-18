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

class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_value :  'coconut'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            selected_value : event.target.value
        });
    }

    handleSubmit(event) {
        alert('Your favourite flavor is : ' + this.state.selected_value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label> Pick your favorite flavor : <br /> <br />
                    <select value = {this.state.selected_value} onChange = {this.handleChange} >
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
}

export default SelectForm;