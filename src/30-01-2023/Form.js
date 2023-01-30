import React from "react";

class Form extends React.Component {

    handleSubmit(e){
        e.preventDefault();
        alert('Clicked on the form');
    }
    
    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Submit</button>
            </form>
            </>
        );
    }

}

export default Form;