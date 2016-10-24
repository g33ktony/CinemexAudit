'use strict';


import React, { Component } from 'react';
import {
  ToolbarAndroid,
 } from 'react-native';

export class ToolBar extends Component {
  render() {
    return (
      <ToolbarAndroid
        logo={require('../assets/logo.png')}
        title="AwesomeApp"
        actions={[{title: 'Settings', icon: require('../assets/login.jpg'), show: 'always'}]}
        onActionSelected={this.onActionSelected} />
    )
  }
  onActionSelected(position) {
    if (position === 0) {
      showSettings();
    }
  }
};

module.exports = ToolBar;
