import React from "react";
import { Link } from 'react-router-dom';

import { Card, List } from "antd";
import {fixTime} from '../utils/fixTime';
import * as consts from '../constants/const';

class ReposList extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }
    componentDidMount(){
        this.setState({repositories: this.props.data.repositoryOwner.repositories});
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        if (this.state != null) {
        const gridSettings = {
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
            xxl: 5
        };
        return (
            <List
                grid={gridSettings}
                dataSource={this.state.repositories.edges}
                renderItem={({node}) => (
                    <List.Item>
                        <Card
                            title={`${node.name}`}
                            key={`${node.id}`}
                            style={{
                                width: "100%",
                                margin: "15px",
                            }}
                        >
                          Обновлялся: <br />{fixTime(node.updatedAt)}
                          <Link to={`${consts.PATH_REPO}/${node.id}`}><p>Подробнее</p></Link>
                        </Card>
                    </List.Item>
                )}
            />
        );
    } else return null;
}
}
export default ReposList;
