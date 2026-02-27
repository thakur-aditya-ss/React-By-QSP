import { Component } from "react";

class StatesInCBC extends Component {
    constructor() {
        super();
        this.state = { Count: 0};
    }

    increment = () => {
        this.setState((prev) => {
            return {Count : prev.Count + 1};
        });
    };

    decrement = () => {
        this.setState((prev) => {
            if (this.state.Count > 0) {
            return {Count : prev.Count - 1};
            }
        });
    };

    reset = () => {
        this.setState({Count : 0})
    }

    render() {
        console.log(this);
        
        return (
            <>
                <h1>States in CBC</h1>
                <h2>Counter : {this.state.Count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset All</button>
                
            </>
        );
    };
};

export default StatesInCBC;