import { User } from "../models/user";

export default class AppState {
  userError: boolean;
  userSuccess: boolean;
  userIsLogin: boolean;
  user: User;
}
