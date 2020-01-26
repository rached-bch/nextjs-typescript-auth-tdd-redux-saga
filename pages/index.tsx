import React from "react";
import Layout from "../components/layout";
import Login from "../components/login";

export default class Index extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="d-flex justify-content-center">
          <Login></Login>
        </div>
      </Layout>
    );
  }
}
