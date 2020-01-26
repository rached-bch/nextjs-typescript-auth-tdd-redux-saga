import React from "react";
import Head from "next/head";
import "bootstrap-scss/bootstrap.scss";
import "../styles/sass/app.scss";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Next app</title>
          <meta
            name="description"
            content="Description of the next application..."
          />
        </Head>
        <div className="container">
          <div className="col-xs-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link active" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                  <a className="nav-item nav-link" href="#">
                    Features
                  </a>
                  <a className="nav-item nav-link" href="#">
                    Pricing
                  </a>
                  <a className="nav-item nav-link disabled" href="#">
                    Disabled
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-xs-12 block-main-page">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
