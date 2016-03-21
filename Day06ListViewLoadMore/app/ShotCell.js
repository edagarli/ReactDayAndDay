/**
 * Created by edagarli on 16/3/21.
 * https://github.com/edagarli
 */

"use strict";

var React = require("react-native");
var {
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Dimensions
    } = React;



var GetImage = require("./helpers/GetImage"),
    screen = Dimensions.get('window');

var ShotCell = React.createClass({
    render: function() {
        return (
            <View>
                <TouchableHighlight>
                    <View style={styles.row}>
                        <Image
                            source={GetImage.shotImage(this.props.shot)}
                            style={styles.cellImage}
                            accessible={true}
                        />
                    </View>
                </TouchableHighlight>
                <View style={styles.cellBorder} />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    textContainer: {
        flex: 1,
    },
    row: {
        backgroundColor: "white",
        flexDirection: "column"
    },
    cellImage: {
        height: 300,
        width: screen.width,
        backgroundColor: "transparent",
        resizeMode: "cover"
    },
    cellBorder: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        // Trick to get the thinest line the device can display
        height: 1 / PixelRatio.get(),
        marginLeft: 4,
    },
});

module.exports = ShotCell;