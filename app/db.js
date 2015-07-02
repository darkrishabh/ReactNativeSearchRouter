var RNDBModel = require('react-native-db-models')

var DB = {
    "search_query": new RNDBModel.create_db("search_query")
}

module.exports = DB