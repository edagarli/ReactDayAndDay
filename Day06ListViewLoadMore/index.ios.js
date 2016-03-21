/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var ShotList = require("./app/ShotList");

class Day06ListViewLoadMore extends Component {
  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={{
                 title: '首页',
                 component: ShotList,
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Day06ListViewLoadMore', () => Day06ListViewLoadMore);
