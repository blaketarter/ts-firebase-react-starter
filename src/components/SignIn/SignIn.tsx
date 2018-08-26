import { navigate } from "@reach/router";
import React, { ChangeEvent, Component, MouseEvent } from "react";
import { connect } from "react-redux";
import { signIn as signInAction } from "../../actions/auth";
import { Dispatch } from "../../types/action";
import { Link } from "../Link";

interface Props {
  signIn: (email: string, password: string) => Promise<void>;
}

interface State {
  email: string;
  password: string;
}

class SignIn extends Component<Props, State> {
  public state = {
    email: "",
    password: "",
  };

  public render() {
    const { email, password } = this.state;
    return (
      <form>
        <input type="text" name="email" value={email} onChange={this.handleemailOnChange} />
        <input type="password" name="password" value={password} onChange={this.handlePasswordOnChange} />
        <input type="submit" onClick={this.handleOnSubmit} />
        <Link to="/sign-up">Don't have an account?</Link>
      </form>
    );
  }

  private handleOnSubmit = (e: MouseEvent<HTMLInputElement>) => {
    const { signIn } = this.props;
    const { email, password } = this.state;
    e.preventDefault();
    signIn(email, password).then(() => navigate("/"));
  }

  private handleemailOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  }

  private handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({ signIn: (email: string, password: string) => dispatch(signInAction(email, password)) });

export default connect(null, mapDispatchToProps)(SignIn);
