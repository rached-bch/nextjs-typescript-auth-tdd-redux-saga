import ApolloClient, { gql } from "apollo-boost";
import { GraphqlClient } from "./graphqlClient";
import fetch from "node-fetch";

const customFetch = (uri: any, options: any): Promise<any> => {
  return fetch(`${uri}`, options);
};
console.log("dddd", process.env.REACT_APP_GRAPHQL_HTTP);
export default class Apollo implements GraphqlClient {
  clientInstance: ApolloClient<any>;
  constructor() {
    this.clientInstance = new ApolloClient({
      uri: process.env.REACT_APP_GRAPHQL_HTTP,
      //uri: "https://48p1r2roz4.sse.codesandbox.io",
      fetch: customFetch
    });
  }
}
