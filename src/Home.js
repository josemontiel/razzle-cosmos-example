import React, { Component } from 'react';
import logo from './react.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Home;
