import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class KyleBaby extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      greeting: 'default',
    };
  }

  componentDidMount() {
    this.setState({
      greeting: this.props.greeting,
    });
  }

  handleClick(event) {
    this.setState({
      greeting: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Hi Caviar, {this.state.greeting}</h2>
        <Button handleClick={this.handleClick} />
      </div>
    )
  }
}

class Button extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.props.handleClick} value={this.state.value}>Suck my tator</button>
      </div>
    )
  }
}

class App extends Component {

  sayHi(to) {
    return (
      <div>
        <h1>Caviar say hi to {to}</h1>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <KyleBaby greeting="I, Kyle, miss you" />
        {this.sayHi("kyle")}
        <KyleBaby greeting="You are the best baby" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
