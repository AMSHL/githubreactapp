import React from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;
import SingleRepo from '../singleRepo';

const RepoPage = ( {match, data} ) => {

    const id = match.params.id;
    const repo = data.repositoryOwner.repositories.edges.filter(el => el.node.id == id);
    console.log(repo);
    return (
            <Content style={{ padding: '0 50px'  }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Repo</Breadcrumb.Item>
                    <Breadcrumb.Item>{repo.name}</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight:280 }}>
                    <SingleRepo data={repo} />
                </div>
            </Content>

    );
}

export default RepoPage;
