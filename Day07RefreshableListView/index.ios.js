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

var TopStories = require("./components/TopStoriesScreen");

class Day07RefreshableListView extends Component {
  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={{
                 title: 'Top Stories',
                 component: TopStories,
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('Day07RefreshableListView', () => Day07RefreshableListView);
