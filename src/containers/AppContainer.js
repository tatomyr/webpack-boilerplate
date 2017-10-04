import React from 'react';

import Component from '../components/Component/index';

export default class AppContainer extends React.Component {
  static textToState(url, callback) {
    fetch(url)
      .then(res => res.text())
      .then(callback);
  }

  constructor(props) {
    super(props);

    this.state = {
      text: '...',
    };
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

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return <Component text={this.state.text} />;
  }
}
