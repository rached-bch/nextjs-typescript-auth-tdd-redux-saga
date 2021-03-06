import React from "react";
import Layout from "../components/layout";
import WithAuthSync from "../components/withAuthSync";

class Dashboard extends React.Component<any> {
  render() {
    return (
      <Layout>
        <div className="d-flex justify-content-center">
          <h1>dashboard</h1>
        </div>
      </Layout>
    );
  }
}

export default WithAuthSync(Dashboard);
