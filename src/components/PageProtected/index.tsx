import { Redirect } from "@reach/router";
import React from "react";
import { isAuthenticated } from "../../lib/auth";
import { PageProps } from "../../types/page";

export function PageProtected({ render, ...props }: PageProps) {
  if (isAuthenticated()) {
    return render(props);
  }
  return <Redirect to="/sign-in" />;
}
