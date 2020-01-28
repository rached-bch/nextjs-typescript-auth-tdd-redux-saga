import { User } from "../models/user";

interface AppStateInterface {
  auth: {
    userError: boolean;
    userSuccess: boolean;
    userIsLogin: boolean;
    user: User;
  };
}

class AppState implements AppStateInterface {
  auth: {
    userError: true;
    userSuccess: false;
    userIsLogin: false;
    user: {
      id: null;
      name: null;
      token: null;
    };
  };
  constructor() {
    this.auth = {
      userError: true,
      userSuccess: false,
      userIsLogin: false,
      user: {
        id: null,
        name: null,
        token: null
      }
    };
  }
}

let appState = new AppState();
console.log({ appState });
export default appState;
