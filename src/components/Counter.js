import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  handleDecrement() {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }

  handleReset() {
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <section className="border m-2">
        <h2 className="text-center p-4">Counter: {this.state.counter}</h2>

        <div className="d-flex justify-content-around mb-4">
          <button className="btn btn-danger" onClick={this.handleDecrement}>
            Decrement
          </button>
          <button className="btn btn-warning" onClick={this.handleReset}>
            Reset
          </button>
          <button className="btn btn-success" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </section>
    );
  }
}
