import React from 'react';
import './Hello.scss';

class Hello extends React.Component {
	constructor() {
    super();
    this.state = {
    	name: null,
      count: 0
    };
    
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  
  handleKeyUp(e) {
  	this.setState({
    	name: e.target.value
    });
  }
  
  handleClick(e) {
  	e.preventDefault();
  	this.setState({
    	count: this.state.count + 1
    });
  }
  
  handleReset(e) {
  	e.preventDefault();
    this.setState({
    	count: 0
    });
  }
  
  render() {
    return (
      <div>
      <h1>Hello World</h1>
        <button onClick={ this.handleClick }>Click me</button>
        <button onClick={ this.handleReset }>Reset me</button>
        { this.state.count } { this.state.count == 1 ? 'time' : 'times' }
        <hr />
        <label>What is your name?</label>
        <input type="text" onKeyUp={ this.handleKeyUp }></input>
        {this.state.name && 
          <div>Hello { this.state.name }!</div>
        }
      </div>
    );
  }
}

export default Hello;