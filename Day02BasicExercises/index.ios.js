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
  Image
} from 'react-native';

class Day02BasicExercises extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React-Native入门学习
        </Text>
        <Image style={styles.pic} source={{uri: 'https://avatars1.githubusercontent.com/u/5710228?v=3&s=460'}}>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  pic: {
    width: 100,
    height: 100
  }
});

AppRegistry.registerComponent('Day02BasicExercises', () => Day02BasicExercises);
