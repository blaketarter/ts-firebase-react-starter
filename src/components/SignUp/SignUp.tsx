import React, { ChangeEvent, Component, MouseEvent } from "react";
import { signUp } from "../../lib/db";

interface State {
  confirmPassword: string;
  username: string;
  password: string;
}

class SignUp extends Component<{}, State> {
  public state = {
    confirmPassword: "",
    password: "",
    username: "",
  };

  public render() {
    const { username, password, confirmPassword } = this.state;
    return (
      <form>
        <input type="text" name="username" value={username} onChange={this.handleUsernameOnChange} />
        <input type="password" name="password" value={password} onChange={this.handlePasswordOnChange} />
        <input
          type="password"
          name="confirm-password"
          value={confirmPassword}
          onChange={this.handleConfirmPasswordOnChange}
        />
        <input type="submit" onClick={this.handleOnSubmit} />
      </form>
    );
  }

  private handleOnSubmit = (e: MouseEvent<HTMLInputElement>) => {
    const { username, password, confirmPassword } = this.state;
    e.preventDefault();
    signUp(username, password, confirmPassword);
  }

  private handleUsernameOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: e.target.value });
  }

  private handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  }

  private handleConfirmPasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ confirmPassword: e.target.value });
  }
}

export default SignUp;
