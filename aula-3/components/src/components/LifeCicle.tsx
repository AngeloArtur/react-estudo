import { Component, ReactNode } from "react";

export class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    componentDidMount(): void {
        console.log('Componente montado')
    }

    componentDidUpdate(prevProps, prevState): void {
        console.log(
          `Componente atualizado, estados anteriores: ${prevProps} ${prevState}`
        )
    }

    componentWillUnmount(): void {
        console.log('Componente desmontado')
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <p>Contagem: {this.state.count}</p>
                <button onClick={this.increment}>Incrementar</button>
            </div>
        )
    }
}