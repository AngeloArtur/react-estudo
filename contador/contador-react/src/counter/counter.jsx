import { Component } from "react"

export class Counter extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  }

  decrement = () => {
    this.setState({count: this.state.count - 1})
  }

  reset = () => {
    this.setState({count: 0})
  }

  render() {
    return (
      <>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.increment}>Incrementar</button>
        <button onClick={this.decrement}>Decrementar</button>
        <button onClick={this.reset}>Resetar</button>
      </>
    )
  }
}
