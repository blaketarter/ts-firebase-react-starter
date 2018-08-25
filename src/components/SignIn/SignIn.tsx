import React, { ChangeEvent, Component, MouseEvent } from "react";
import { signIn } from "../../lib/auth";
import { Link } from "../Link";

interface State {
  username: string;
  password: string;
}

class SignIn extends Component<{}, State> {
  public state = {
    password: "",
    username: "",
  };

  public render() {
    const { username, password } = this.state;
    return (
      <form>
        <input type="text" name="username" value={username} onChange={this.handleUsernameOnChange} />
        <input type="password" name="password" value={password} onChange={this.handlePasswordOnChange} />
        <input type="submit" onClick={this.handleOnSubmit} />
        <Link to="/sign-up">Don't have an account?</Link>
      </form>
    );
  }

  private handleOnSubmit = (e: MouseEvent<HTMLInputElement>) => {
    const { username, password } = this.state;
    e.preventDefault();
    signIn(username, password);
  }

  private handleUsernameOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: e.target.value });
  }

  private handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  }
}

export default SignIn;
