import React from 'react';

import Component from '../components/Component/index.js';

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '...',
    };
  }

  static textToState(url, callback) {
    fetch(url)
      .then(res => res.text())
      .then(callback);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    AppContainer.textToState(
      `${location.hostname === 'localhost' ? 'http://localhost:8081' : ''}/api`,
      text => this.setState({ text })
    );
  }

  render() {
    return <Component text={this.state.text} />;
  }
}
