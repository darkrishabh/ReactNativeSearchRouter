var React = require('react-native')
Globals = {

    vars: {
        _: require('lodash'),
        DB: require('./db'),
        DBEvents: require('react-native-db-models').DBEvents,
        Router: require('react-native-router'),
        React: require('react-native'),
        AppRegistry: React.AppRegistry,
        AppStateIOS: React.AppStateIOS,
        AlertIOS: React.AlertIOS,
        NativeModules: React.NativeModules,
        Text: React.Text,
        View: React.View,
        PushNotificationIOS: React.PushNotificationIOS,
        StyleSheet: React.StyleSheet,
        TouchableHighlight: React.TouchableHighlight,
        TouchableOpacity: React.TouchableOpacity,
        TextInput: React.TextInput,
        Image: React.Image,
        Navigator: React.Navigator,
        NavigatorIOS: React.NavigatorIOS,
        ScrollView: React.ScrollView,
    },
    load: function () {
        var me = this;
        var _ = me.vars._

        _.map(me.vars, function (v, k) {
            window[k] = v
        })
        return window
    }
}

module.exports = Globals
