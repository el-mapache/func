import React from 'react';
import store from '../store';

class Provider extends React.Component {
  getChildContext() {
    return {
      state: this.state
    };
  }
  constructor(props, context) {
    super(props, context)
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  render() {
    const { state } = this;
    return React.cloneElement(this.props.children, {...state});
  }
}

Provider.childContextTypes = {
  state: React.PropTypes.object
};

export default Provider;
