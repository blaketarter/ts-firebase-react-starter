import { Router } from "@reach/router";
import React, { Component, StrictMode } from "react";
import { setup } from "../../lib/db";
import { Link } from "../Link";
import { PageNotFound } from "../PageNotFound";
import { PageProtected } from "../PageProtected";
import { PageUnprotected } from "../PageUnprotected";
import { SignInLoadable } from "../SignIn";
import { SignOutLoadable } from "../SignOut";
import { SignUpLoadable } from "../SignUp";

setup();

const renderRoot = () => <div>hello world<Link to="/sign-out">Sign Out</Link></div>;
const renderSignIn = () => <SignInLoadable />;
const renderSignUp = () => <SignUpLoadable />;
const renderSignOut = () => <SignOutLoadable />;

class App extends Component {
  public render() {
    return (
      <StrictMode>
        <Link to="/">Home</Link>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Router>
          <PageProtected path="/" render={renderRoot} />
          <PageUnprotected path="/sign-in" render={renderSignIn} />
          <PageUnprotected path="/sign-up" render={renderSignUp} />
          <PageProtected path="/sign-out" render={renderSignOut} />
          <PageNotFound default={true} />
        </Router>
      </StrictMode>
    );
  }
}

export default App;
