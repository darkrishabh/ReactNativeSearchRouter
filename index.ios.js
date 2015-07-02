/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var Globals = require('./app/globals').load()
var rightCorner = require('./app/rightCorner')
var Home = require('./app/home')
var firstRoute = {
    name: "Home",
    component: Home,
    rightCorner: rightCorner
}


/*
search_query ----> [{query: "", actor: "tweets"}, {query: "", actor:"users"}, {}]
 */
var demoapp = React.createClass({
    componentDidMount: function(){
        DB.search_query.get({actor: "tweet"}, function(data){
            console.log("query table=", data)
            if(!data.length){
                DB.search_query.add({query: "", actor: "tweet"}, function(data_added){
                    console.log("added data ", data_added)
                })
            }
        })
    },
    render: function () {
        return (
            <Router firstRoute={firstRoute} />
        );
    }
});

var styles = StyleSheet.create({
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('demoapp', () => demoapp);

function refreshapp(){
    console.log('rerender')
    AppRegistry.registerComponent('demoapp', () => demoapp);
}

DBEvents.once("all", function(){
    refreshapp()
})