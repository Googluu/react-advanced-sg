import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import  Context  from './Context';

const client = new ApolloClient({
    uri: "https://petgram-server-max-seven.vercel.app/graphql",
    cache: new InMemoryCache(),
});

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(
    <Context.Provider>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    </Context.Provider>
);