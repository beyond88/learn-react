import React from "react";
import UserInfo from "./UserInfo";

class Comment extends React.Component {

    render(){
        return <>
                <div className="Comment">
                    <UserInfo user={this.props.author} />
                    <div className="Comment-text">
                        {this.props.text}
                    </div>
                    <div className="Comment-date">
                        {formatDate(this.props.date)}
                    </div>
                </div>
            </>
    }

}

export const  formatDate = (date) => {
    return date.toLocaleDateString();
}

export default Comment;