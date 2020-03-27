import React from 'react';
import { Card } from 'antd';
import { fixTime } from '../utils/fixTime';

class SingleRepo extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const repo = this.props.data[0].node; 
        return (
          
            <Card title={`${repo.name}`}  style={{ width: '100%' }}>
                <h3>Repo id:{repo.id}</h3>
                <h4>Last update: </h4>
                <p>{fixTime(repo.updatedAt)}</p>
                <h4>Description:</h4>
                <p>{repo.description}</p>
                <h4>Clone via SSH:</h4>
                <p>{repo.sshUrl}</p>
                <h4>Watch on github.com:</h4>
                <p><a href={repo.url} target='_blank'>{repo.url}</a></p>
            </Card>
        
        );
    
}}

export default SingleRepo;