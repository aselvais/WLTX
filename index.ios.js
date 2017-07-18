import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Main from './src/views/Main';

export default class WLTX extends Component {
  render() {
    return (<Main/>);
  }
}

AppRegistry.registerComponent('WLTX', () => WLTX);
