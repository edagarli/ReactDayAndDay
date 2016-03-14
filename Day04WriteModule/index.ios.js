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
    ScrollView
} from 'react-native';

var Article = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.title]}>{this.props.title}</Text>
                <Text style={[styles.text, ]}>{this.props.author}</Text>
                <Text style={[styles.text, ]}>{this.props.time}</Text>
            </View>
        );
    }
});

var Day04WriteModule = React.createClass({
    getInitialState: function () {
        var data = [
            {
                title: "React-Native  Guide",
                author: "edagarli",
                time: "2016-03-14"
            },
            {
                title: "how to learn",
                author: "edagarli",
                time: "2016-03-14"
            },
            {
                title: "just do it",
                author: "edagarli",
                time: "2016-03-14"
            }
        ];
        return {
            articles: data
        };
    },
    render: function () {
        return (
            <ScrollView>
                {this.state.articles.map(function (article) {
                    return <Article title={article.title} author={article.author} time={article.time}/>
                })}
            </ScrollView>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    text: {
        color: 'red',
    }
});

AppRegistry.registerComponent('Day04WriteModule', () => Day04WriteModule);
