import React, { Component } from 'react';
import axios from 'axios';
import './comp.css';

//import { render } from 'react-dom';

class Flank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


increase = () => {
    this.setState({count: this.state.count + 1 });

}

decrease = () => {
    this.setState({count: this.state.count - 1});

}

render() {
    return (
        <div className = "Counter">
            <button onClick={this.increase} className="Tab">Plus:</button>
            <button onClick={this.decrease} className="Tab">Minus</button>
            <h4>{this.state.count}</h4>
        </div>
    );
}
}
export default Flank;