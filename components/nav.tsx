import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { logout } from "../stores/modules/auth/actions";
import { bindActionCreators } from "redux";
import Router from "next/router";
import * as types from "../stores/modules/auth/types";

class Nav extends React.Component<any, any> {
  runLogout = event => {
    event.preventDefault();
    this.props.logout();
    Router.push("/");
  };

  render() {
    //console.log("this.props", this.props);
    return (
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
            <Link href="/dashboard">
              <a className="nav-item nav-link">Dashboard</a>
            </Link>
            <Link href="/">
              <a className="nav-item nav-link" onClick={this.runLogout}>
                Logout
              </a>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
