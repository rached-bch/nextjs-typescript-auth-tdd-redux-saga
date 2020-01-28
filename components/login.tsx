import React from "react";
import { connect } from "react-redux";
import { logout, login } from "../stores/modules/auth/actions";
import { func, object, string } from "prop-types";
import { bindActionCreators } from "redux";

class Login extends React.Component<any, any> {
  username: string = null;
  password: string = null;
  runLogin = event => {
    event.preventDefault();
    console.log("yeeyeyeyey");
    //this.props.userError = true;
    //this.props.login();
  };
  handleChange = event => {
    switch (event.target.name) {
      case "usename":
        this.username = event.target.value;
        break;
      case "password":
        this.password = event.target.value;
        break;
    }
    console.log("user credentials", this.username, this.password);
  };
  render() {
    console.log("this.props", this.props);
    return (
      <div className="block-login-form">
        {this.props.userError ? (
          <div className="alert alert-danger">Error</div>
        ) : null}
        <form onSubmit={this.runLogin}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="usename"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log({ state });
  return {
    userError: state.auth.auth.userError,
    userSuccess: state.auth.userSuccess,
    userIsLogin: state.auth.userIsLogin,
    user: state.auth.user
  };
};

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
