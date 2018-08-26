import { Router } from "@reach/router";
import React, { Component, StrictMode } from "react";
import { Provider } from "react-redux";
import { createStore } from "../../lib/store";
import { addGlobalStyles, theme, ThemeProvider } from "../../lib/theme";
import { HomeLoadable } from "../Home";
import { PageNotFound } from "../PageNotFound";
import { PageProtected } from "../PageProtected";
import { PageUnprotected } from "../PageUnprotected";
import { SignInLoadable } from "../SignIn";
import { SignOutLoadable } from "../SignOut";
import { SignUpLoadable } from "../SignUp";

addGlobalStyles();

const store = createStore();

const renderHome = () => <HomeLoadable />;
const renderSignIn = () => <SignInLoadable />;
const renderSignUp = () => <SignUpLoadable />;
const renderSignOut = () => <SignOutLoadable />;

class App extends Component {
  public render() {
    return (
      <StrictMode>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Router>
              <PageProtected path="/" render={renderHome} />
              <PageUnprotected path="/sign-in" render={renderSignIn} />
              <PageUnprotected path="/sign-up" render={renderSignUp} />
              <PageProtected path="/sign-out" render={renderSignOut} />
              <PageNotFound default={true} />
            </Router>
            </ThemeProvider>
          </Provider>
      </StrictMode>
    );
  }
}

export default App;
