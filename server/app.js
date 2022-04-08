const express = require('express');
const graphqlHTTP = require("express-graphql").graphqlHTTP
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const app = express();

const url = "mongodb+srv://admin:admin123@cluster0.tgvi6.mongodb.net/graphqlproject?retryWrites=true&w=majority"

// cnx to db 
mongoose.connect(url);
mongoose.connection.once('open', () => {
    console.log('connectedto DB')
})

// GraphQL middleware options must contain a schema."
app.use('/graphql', graphqlHTTP({
    // use it insid midleware
    schema,
    graphiql: true
}))



app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
