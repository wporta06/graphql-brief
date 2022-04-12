const express = require('express');
const graphqlHTTP = require("express-graphql").graphqlHTTP
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const app = express();
const cors = require('cors')

const url = "mongodb+srv://admin:admin123@cluster0.tgvi6.mongodb.net/graphqlproject?retryWrites=true&w=majority"
app.use(cors({
    origin: '*'
}))
// cnx to db 
mongoose.connect(url);
mongoose.connection.once('open', () => {
    console.log('connectedto DB')
})

// GraphQL middleware options must contain a schema."
app.use('/graphql', graphqlHTTP({
    // use it insid midleware
    schema,
    // for graphique view
    graphiql: true
}))



app.listen(4000, () => {
    console.log('now listeniiiing on port 4000');
});
