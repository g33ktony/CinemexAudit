// 'use strict';


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Alert,
  TouchableHighlight
} from 'react-native';

class listView extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  render() {
    return (
      <TouchableHighlight onPress={() => Alert.alert(
        'Alerta',
        'Alchimia Team'
        [
          {text: 'You sure?'},
          {text: 'You sure?', style: 'cancel'}
        ]
    )}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={{marginBottom: 30, backgroundColor: 'red', padding: 20, fontWeight: 'bold', borderRadius: 6, borderColor: 'black', borderWidth: 6, width: 150, height: 100}}>{rowData}</Text>}
        />
      </TouchableHighlight>
    );
  }
}

module.exports = listView;
