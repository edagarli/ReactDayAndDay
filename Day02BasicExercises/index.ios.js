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
            <View style={styles.style_0}>
                {/*  <View style={{flex: 1,height:40, borderWidth: 1, borderColor: 'red'}}>
                  </View>
                  <View style={styles.container}>
                      <Text style={styles.welcome}>
                          React-Native入门学习
                      </Text>
                      <Image style={styles.pic} source={{uri: 'https://avatars1.githubusercontent.com/u/5710228?v=3&s=460'}}>
                      </Image>
                  </View>
                  <View style={styles.style_0}>
                      <View style={styles.style_1}></View>
                      <View style={styles.style_1}></View>
                      <View style={{flex:10}}></View>
                  </View>*/}
                <View style={styles.style_0}>
                    <View style={styles.style_1}>
                        <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
                        <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
                    </View>
                    <View style={[styles.style_1, {flexDirection: 'column'}]}>
                        <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
                        <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
                    </View>
                    <View style={{flex:10, borderWidth: 1, borderColor: 'red',}}>
                        <Text style={{marginTop:40, fontSize:25,alignSelf: 'center'}}>1／2高</Text>
                    </View>
                </View>
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
    },
    style_0: {
        flex : 1
    },
    style_1: {
        flex : 5,
        flexDirection: 'row',
        height: 40,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        alignSelf: 'center'
    }
});

AppRegistry.registerComponent('Day02BasicExercises', () => Day02BasicExercises);
