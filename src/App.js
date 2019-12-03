import React from 'react';
import CardGrid from './components/CardGrid'
import './App.css';

class App extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/brittanymae01')
      .then(response => response.json())
      .then(response => this.setState({
        user: response
      }))
  }

  render() {
    return (
      <div className="App">
        <CardGrid user={this.state.user} />
      </div>
    );
  }

}

export default App;
