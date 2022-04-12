import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Initialize ApolloClient
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',
  headers: {
    'Content-Type': 'application/json'
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,
  document.getElementById('root')
);

