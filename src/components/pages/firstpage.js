import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import ReposList from '../repolist';
const { Content } = Layout;

const FirstPage = (props) => {

    return (
        <Content style={{ padding: '0 50px'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Repos</Breadcrumb.Item>
                <Breadcrumb.Item>My</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight:260 }}>
                <ReposList data={props.data}/>
            </div>
        </Content>
    )
};

export default FirstPage;