import { navigate } from "@reach/router";
import React, { ChangeEvent, Component, MouseEvent } from "react";
import { connect } from "react-redux";
import { signUp as signUpAction } from "../../actions/auth";
import { Dispatch } from "../../types/action";
import { Link } from "../Link";

interface Props {
  signUp: (email: string, password: string) => Promise<void>;
}

interface State {
  confirmPassword: string;
  email: string;
  password: string;
}

class SignUp extends Component<Props, State> {
  public state = {
    confirmPassword: "",
    email: "",
    password: "",
  };

  public render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <form>
        <input type="text" name="email" value={email} onChange={this.handleemailOnChange} />
        <input type="password" name="password" value={password} onChange={this.handlePasswordOnChange} />
        <input
          type="password"
          name="confirm-password"
          value={confirmPassword}
          onChange={this.handleConfirmPasswordOnChange}
        />
        <input type="submit" onClick={this.handleOnSubmit} />
        <Link to="/sign-in">Already have an account?</Link>
      </form>
    );
  }

  private handleOnSubmit = (e: MouseEvent<HTMLInputElement>) => {
    const { signUp } = this.props;
    const { email, password, confirmPassword } = this.state;
    e.preventDefault();
    if (password === confirmPassword) {
      signUp(email, password).then(() => navigate("/"));
    }
  }

  private handleemailOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  }

  private handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  }

  private handleConfirmPasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ confirmPassword: e.target.value });
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({ signUp: (email: string, password: string) => dispatch(signUpAction(email, password)) });

export default connect(null, mapDispatchToProps)(SignUp);
