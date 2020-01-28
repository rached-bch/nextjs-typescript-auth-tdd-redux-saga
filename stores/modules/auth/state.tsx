import { User } from "../../../models/user";

interface AuthStateInterface {
  userError: boolean;
  userSuccess: boolean;
  userIsLogin: boolean;
  user: User;
}

class AuthState implements AuthStateInterface {
  userError: true;
  userSuccess: false;
  userIsLogin: false;
  user: {
    id: null;
    name: null;
    token: null;
  };
  constructor() {
    this.userError = true;
    this.userSuccess = false;
    this.userIsLogin = false;
    this.user = {
      id: null,
      name: null,
      token: null
    };
  }
}

let authState = new AuthState();

export default authState;
