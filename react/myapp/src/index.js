import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class KyleBaby extends Component {

  constructor() {
    super();
    this.state = {
      greeting: 'default',
    };
  }

  componentDidMount() {
    this.setState({
      greeting: this.props.greeting,
    });
  }

  render() {
    return (
      <div>
        <h2>Hi Caviar, {this.state.greeting}</h2>
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
        <h3>Hi Kyle!</h3>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
