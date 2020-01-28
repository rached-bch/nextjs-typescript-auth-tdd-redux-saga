import { User } from "../../../models/user";

interface AuthStateInterface {
  userError: boolean;
  userSuccess: boolean;
  userFormError: boolean;
  user: User;
}

class AuthState implements AuthStateInterface {
  userError: boolean;
  userSuccess: boolean;
  userFormError: boolean;
  user: {
    id: number;
    name: string;
    token: string;
  };
  constructor() {
    this.userError = false;
    this.userSuccess = false;
    this.userFormError = false;
    this.user = {
      id: null,
      name: null,
      token: null
    };
  }
}

let authState = new AuthState();

export default authState;
