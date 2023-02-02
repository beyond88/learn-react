import React from 'react';

export default class BlurExample extends React.Component {
    constructor(props){

        super(props);
        this.state = { isOpen: true };
        this.timeOutId = null;

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);

    }

    onClickHandler(){
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    // We close the popover on the next tick by using setTimeout.
    // This is necessary because we need to first check if
    // another child of the element has received focus as
    // the blur event fires prior to the new focus event.
    onBlurHandler(){
        this.timeOutId = setTimeout(() => {
            this.setState({
              isOpen: false
            });
        });
      
    }

    // If a child receives focus, do not close the popover.
    onFocusHandler(){
        clearTimeout(this.timeOutId);
    }

    render(){
        return(
            <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
                <button onClick={this.onClickHandler} 
                    aria-haspopup="true"
                    aria-expanded={this.state.isOpen}
                >
                    Select an option
                </button>
                {
                    this.state.isOpen && (
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                    )
                }
            </div>
        );
    }
}