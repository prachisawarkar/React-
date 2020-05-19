import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

class Temperature_Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onTemperatureChange(event.target.value)
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter Temperature in {scaleNames[scale]}: </legend>
                <input 
                    value = {temperature} 
                    onChange = {this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature : '',
            scale : 'c'
        };
        //this.onTemperatureChange = this.onTemperatureChange.bind(this);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    /*onTemperatureChange() {
        this.setState({
            temperature : event.target.value
        })
    }*/
    handleCelsiusChange(temperature) {
        this.setState({
            scale: 'c',
            temperature
        });
    }
    handleFahrenheitChange(temperature) {
        this.setState({
            scale : 'f',
            temperature
        });
    }
    
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c'? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <Temperature_Input 
                    scale = 'c' 
                    temperature = {celsius}
                    onTemperatureChange = {this.handleCelsiusChange}
                    />
                <Temperature_Input 
                    scale = 'f'
                    temperature = {fahrenheit}
                    onTemperatureChange = {this.handleFahrenheitChange}
                    />
                <BoilingVerdict celsius = {parseFloat(celsius)} />
            </div>
        );
    }
}

export default Calculator;+