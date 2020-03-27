import React from 'react';
import { Layout } from 'antd';
import NavBar from './components/navBar.js';
import GetRepos from "./API/repos";
import AppFooter from './components/appfooter'

class App extends React.Component {
    render() {

        return (
            <Layout 
            className="layout"
            style={{
                overflow: 'auto',
                width: '100%'}}>
                <NavBar />
                <GetRepos />
                <AppFooter />
            </Layout>
        )
    };
}

export default App;
