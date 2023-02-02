import React from 'react';

function CustomTextInput(props){
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

export default class CustomRef extends React.Component {
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }

    render(){
        return(
            <CustomTextInput inputRef={this.inputElement}/>
        );
    }
}