import React from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

const AboutApp = () => {
    return (
        <Content style={{ padding: '0 50px'  }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>About</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight:280 }}>
                <p>Тестовое задание, выполнил Анатолий Шлом</p>
            </div>
        </Content>
    )
};

export default AboutApp;