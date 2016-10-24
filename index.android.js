/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';

const ListView = require('./components/listView');
const CamReact = require('./components/camera');
const Login = require('./components/login');
const Navigator = require('./components/navigator');
const ToolBar = require('./components/toolbar');

var alertMessage = 'Alchimia the best!';

export default class iosApp extends Component {
  render() {
    return (
      <Login></Login>
      // <Navigator></Navigator>
      // <ToolBar></ToolBar>
    );
  }
}


AppRegistry.registerComponent('iosApp', () => iosApp);
