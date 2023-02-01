import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default class TemperatureInput extends React.Component{

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = { tempareture: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render(){

        const tempareture = this.state.tempareture;
        const scale = this.props.scale; 
        return (
            <>
                <fieldset>
                    <legend>Enter tempareture in {scaleNames[scale]}:</legend>
                    <input type="text" onChange={this.handleChange} value={tempareture} />
                </fieldset>
            </>
        );
    }
}