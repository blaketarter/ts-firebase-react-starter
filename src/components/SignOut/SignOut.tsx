import { navigate } from "@reach/router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut as signOutAction } from "../../actions/auth";
import { noop } from "../../lib/noop";
import { Dispatch } from "../../types/action";
import { signInUrl } from "../../types/route";
import Loading from "../Loading";

interface Props {
  signOut: () => Promise<void>;
}

class SignOut extends Component<Props> {
  public componentDidMount() {
    const { signOut } = this.props;
    signOut().then(() => {
      navigate(signInUrl);
    });
  }
  public render() {
    return <Loading isLoading={true} pastDelay={true} timedOut={false} error={false} retry={noop} />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({ signOut: () => dispatch(signOutAction()) });

export default connect(null, mapDispatchToProps)(SignOut);
