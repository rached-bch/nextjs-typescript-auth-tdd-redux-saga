import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "../api/apiClient";
import { gql } from "apollo-boost";
import appStore from "../stores/appStore";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

interface Props {
  store: any;
}

export default withRedux(appStore)(
  class MyApp extends App<Props> {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      //console.log(":::::::::::", store.getState().auth.auth.userError);
      return (
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      );
    }
  }
);
