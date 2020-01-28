import React from "react";
import { connect } from "react-redux";
import {
  loginFormError,
  login,
  loginHideFormErrors,
  loginProceed
} from "../stores/modules/auth/actions";
import { func, object, string } from "prop-types";
import { bindActionCreators } from "redux";
import * as types from "../stores/modules/auth/types";

class Login extends React.Component<any, any> {
  username: string = "deving.test@gmail.com";
  password: string = "12465mpdeed";
  runLogin = event => {
    event.preventDefault();
    console.log(this.username, this.password);
    if (
      this.username !== null &&
      this.username.length > 0 &&
      this.password !== null &&
      this.password.length > 0
    ) {
      this.props.loginProceed();
      this.props.login({ username: this.username, password: this.password });
    } else {
      this.props.loginFormError();
    }
    //this.props.login();
  };
  handleChange = event => {
    this.props.loginHideFormErrors();
    //console.log("event.target.name", event.target.name);
    switch (event.target.name) {
      case "email":
        this.username = event.target.value;
        break;
      case "password":
        this.password = event.target.value;
        break;
    }
  };
  render() {
    return (
      <div className="block-login-form">
        {this.props.userFormError ? (
          <div className="alert alert-danger">Form error</div>
        ) : null}
        {this.props.userError ? (
          <div className="alert alert-danger">Error authentication</div>
        ) : null}
        {this.props.userSuccess ? (
          <div className="alert alert-success">
            <p>Success authentication</p>
            <p>User : {this.props.user.name}</p>
          </div>
        ) : null}
        <form onSubmit={this.runLogin}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              defaultValue={this.username}
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
              defaultValue={this.password}
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
  return {
    userError: state.auth.userError,
    userSuccess: state.auth.userSuccess,
    userFormError: state.auth.userFormError,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch),
  loginProceed: bindActionCreators(loginProceed, dispatch),
  loginFormError: bindActionCreators(loginFormError, dispatch),
  loginHideFormErrors: bindActionCreators(loginHideFormErrors, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
