import React from 'react';
import{ Link } from"react-router-dom";
import { Layout, Menu } from 'antd';
import * as consts from '../constants/const';
const { Header } = Layout;


const NavBar = () => {
    return (
        <Header>
           <div style={{
                width: '120px',
                height: '31px',
                backgroundImage: 'url(../assets/githublogo.png)',
                backgroundSize: 'contain',
                backgroundRepeat  : 'no-repeat',
                margin: '16px 24px 16px 0',
                float: 'left',
                }}
               /> 
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['m1']}
                style={{ lineHeight: '64px' }}
            >
              
                <Menu.Item key="m1"><Link to={consts.PATH_MAIN}>My Repos </Link></Menu.Item>
                <Menu.Item key="m2"><Link to={consts.PATH_ABOUT}>About </Link></Menu.Item>
            </Menu>
        </Header>
    )
};

export default NavBar;
