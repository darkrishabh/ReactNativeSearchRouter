var searchBar = React.createClass({
    saveText: function(text){
        DB.search_query.update({actor: "tweet"}, {query: text})
    },
    componentWillUnmount: function(){
        DB.search_query.update({actor: "tweet"}, {query: ""})
    },
    render: function(){
        var me = this;
        return (
            <TextInput style={styles.input}
                onChangeText={(text) => me.saveText(text)}
                placeholder="Search Tweets" placeholderColor={"#FFF"}></TextInput>
        )
    }
});
var styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFF',
        width: 220,
        height: 32,
        marginTop: 6,
        paddingLeft: 10,
        color: '#000',
        borderRadius: 4
    }
});

module.exports = searchBar