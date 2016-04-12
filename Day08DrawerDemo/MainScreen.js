/**
 * Created by edagarli on 16/4/12.
 * https://github.com/edagarli
 */

'use strict';

var React = require('react-native');
var {
    AsyncStorage,
    Image,
    StyleSheet,
    Text,
    View,
    } = React;

var Drawer = require('react-native-drawer');
var ThemesList = require('./ThemesList');

var DRAWER_REF = 'drawer';

var MainScreen = React.createClass({
    getInitialState: function() {
        return ({
            theme: null,
        });
    },
    onSelectTheme: function(theme) {
        this.refs[DRAWER_REF].close();
        this.setState({theme: theme});
    },
    onRefresh: function() {
        this.onSelectTheme(this.state.theme);
    },
    render: function() {
        var drawer = <ThemesList onSelectItem={this.onSelectTheme} />;
        return (
            <Drawer
                ref={DRAWER_REF}
                openDrawerOffset={100}
                panCloseMask={1}
                content={drawer} >
            </Drawer>
        );
    }

});

module.exports = MainScreen;