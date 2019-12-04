import React from 'react';
import CardGrid from './components/CardGrid'
import './App.css';
import logo from './images/githublogo.png'
import lambdalogo from './images/lambdalogo.png'

class App extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/brittanymae01')
      .then(response => response.json())
      .then(response => this.setState({
        user: response
      }))
    fetch('https://api.github.com/users/brittanymae01/followers')
      .then(response => response.json())
      .then(response => this.setState({
        followers: response
      }))
  }


  render() {
    return (
      <div className="container" >
        <div class="header">
          <img src={logo} alt="Lambda Logo" />
          <span role='img' aria-label='heart'>❤️'s</span>
          <img src={lambdalogo} alt="GitHub Logo" />
        </div >
        <CardGrid user={this.state.user} followers={this.state.followers} />
      </div >
    );
  }

}

export default App;
