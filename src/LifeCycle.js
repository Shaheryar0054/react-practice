import React, { Component } from 'react';
import Counters from './Counters';

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    console.log(count);
    return (
      <div>
        <Counters number={this.state.count} />
        <button onClick={this.handleClick} type="button">Click</button>
      </div>
    );
  }
}

export default LifeCycle;
