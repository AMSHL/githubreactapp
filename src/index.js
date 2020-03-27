import React from 'react';
import ReactDOM from 'react-dom';
import{ HashRouter } from 'react-router-dom';
import App from './App';
import { ApolloProvider } from "react-apollo";
import client from "./API/connect";

import 'antd/dist/antd.css';

ReactDOM.render(
    <ApolloProvider client={client}>
        <HashRouter>
            <App />
        </HashRouter>
    </ApolloProvider>
, 
document.getElementById('root'));
