import React from "react";

class timeComponent extends React.Component {

    state = {date: new Date()}


    render() {
        return (
            <div>
                <p> ddd {this.state.date.toLocaleDateString()}</p>
            </div>
        );
    }
}

export default timeComponent;