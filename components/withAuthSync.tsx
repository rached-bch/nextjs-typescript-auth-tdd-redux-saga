import React from "react";
import Router from "next/router";

const WithAuthSync = WrappedComponent =>
  class extends React.Component {
    static async getInitialProps(ctx) {
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps };
    }

    componentDidMount() {
      const user = localStorage.getItem("currentUser");

      //const user = false;

      if (!user) {
        Router.push("/");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default WithAuthSync;
