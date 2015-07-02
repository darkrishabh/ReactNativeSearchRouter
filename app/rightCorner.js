var SearchPage = require('./SearchPage')
var searchBar = require('./searchBar')

var RightCorner = React.createClass({
    goToSearch: function(){
        var me = this;
        var route = {
            name: "",
            component: SearchPage,
            titleComponent: searchBar
        }
        me.props.toRoute(route)
    },
    render: function(){
        var me = this;
        return (
            <Text style={{marginRight: 20}} onPress={() => me.goToSearch()}>
                Find
            </Text>
        )
    }
});

module.exports = RightCorner