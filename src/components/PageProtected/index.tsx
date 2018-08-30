import React from "react";
import { connect } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { isAuthenticated } from "../../lib/auth";
import { noop } from "../../lib/noop";
import { PageProps } from "../../types/page";
import { State } from "../../types/state";
import { firebaseStateName } from "../../types/store";
import Loading from "../Loading";
import { Redirect } from "../Redirect";

interface Props {
  auth?: object;
}

function PageProtectedWrapped({ render, auth, ...props }: PageProps & Props) {
  if (!isLoaded(auth)) {
    return <Loading retry={noop} isLoading={true} pastDelay={true} timedOut={false} error={false} />;
  }
  if (isAuthenticated(auth)) {
    return render(props);
  }
  return <Redirect to="/sign-in" />;
}

const mapStateToProps = ({ [firebaseStateName]: { auth } }: State) => ({
  auth,
});

export const PageProtected = connect(
  mapStateToProps,
)(PageProtectedWrapped);
