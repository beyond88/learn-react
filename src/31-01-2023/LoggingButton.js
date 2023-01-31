import React from "react";

export default class LoggingButton extends React.Component{
    
    handleClick = () => {
        console.log('this is: ', this);
    }

    anotherHandleClick(){
        console.log('Another this is: ', this);
    }

    render(){
        return(
            <>
            <button onClick={this.handleClick}>
                Click me
            </button>
            <button onClick={()=> this.anotherHandleClick()}>
                Another click me
            </button>
            </>

        );
    }
}