import React from "react";
import { connect } from "react-redux";
import { logout, login } from "../stores/modules/auth/actions";
import { func, object, string } from "prop-types";
import { bindActionCreators } from "redux";

class Login extends React.Component<any, any> {
  runLogin = () => {
    console.log("yeeyeyeyey");
    this.props.login();
  };
  render() {
    return (
      <div className="block-login-form">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.runLogin}
          >
            Log in
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
