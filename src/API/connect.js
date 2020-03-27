import ApolloClient from "apollo-boost";
import { TOKEN, API_URL } from '../constants/const.js';

const client = new ApolloClient({
    uri: API_URL,
    request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${TOKEN}`
          }
        });
    }
});

export default client;