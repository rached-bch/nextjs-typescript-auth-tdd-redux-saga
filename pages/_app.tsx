import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "../api/apiClient";
import { gql } from "apollo-boost";

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

export default class MyApp extends App<any> {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  render() {
    //console.log(this.props);
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}
