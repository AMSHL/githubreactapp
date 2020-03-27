import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FirstPage from '../components/pages/firstpage';
import AboutApp from '../components/pages/aboutpage';
import RepoPage from '../components/pages/repopage';
import NoMatch from '../components/pages/nomatch';
import * as consts from '../constants/const';

class Switchpath extends React.Component {
    constructor (props){
        super(props);
    }

    render(){
        let data=this.props.data;
    return(
        <Switch>
            <Route exact path = {consts.PATH_MAIN}  render={(props) => <FirstPage data={data}/>} />
            <Route path = {`${consts.PATH_REPO}/:id`} render={(props) => <RepoPage data={data} {...props} />} />
            <Route path = {consts.PATH_ABOUT} component = {AboutApp} />
            <Route component = {NoMatch} />
        </Switch>
    );
}}
export default Switchpath;