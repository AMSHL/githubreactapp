import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import { Card, List } from 'antd';
import ReposList from '../components/repolist';
import Switchpath from '../logic/routes';
import { INITIAL_USER } from '../constants/const';

const GET_USER_REPOSITORIES = gql`
    {
    repositoryOwner(login: "${INITIAL_USER}") {
      repositories(orderBy: {field: UPDATED_AT, direction: ASC}, first: 100) {
        edges {
          node {
            updatedAt
            id
            name
            description
            sshUrl
            url
          }
        }
      }
    }
  }
`;  

const GetRepos = () => (
    <Query query={GET_USER_REPOSITORIES}>
      {({ loading, error, data }) => {
           if (loading) return "Loading...";
           if (error) return `Error! ${error.message}`;
         return (
             <Switchpath data={data}/>
           );
      }}
    </Query>
  );

export default GetRepos;