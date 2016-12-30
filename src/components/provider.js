import React from 'react';
import store from '../store';

class Provider extends React.Component {
  constructor() {
    super()
    this.state = store.getState();
  }

  componentDidMount() {
    const self = this;
    store.subscribe(() => {
      self.setState(store.getState());
    })
  }

  render() {
    const { state } = this;
    return React.cloneElement(this.props.children, {...state});
  }
}

export default Provider;
