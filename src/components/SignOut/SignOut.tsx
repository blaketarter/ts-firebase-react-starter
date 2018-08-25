import { Component } from "react";
import { signOut } from "../../lib/auth";

class SignOut extends Component {
  public componentDidMount() {
    signOut();
  }
  public render() {
    return null;
  }
}

export default SignOut;
