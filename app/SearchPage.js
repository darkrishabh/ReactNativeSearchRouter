
var SearchPage =React.createClass({
    getInitialState: function(){
        return {
            query: ""
        }
    },
    render: function(){
        var me = this;
        DB.search_query.get({actor: "tweet"}, function(data){
            var query_data = data[0]
            me.setState({query: query_data.query})
        })
        return (
            <Text>
                Search Page - {me.state.query}
            </Text>
        )
    }
});

module.exports = SearchPage

