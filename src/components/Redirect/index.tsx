import { Redirect as RouterRedirect, RedirectProps } from "@reach/router";
import React from "react";
import { route } from "../../types/route";

interface Props {
  to?: route;
  from?: route;
}

export const Redirect =
  React.forwardRef<RouterRedirect<{}>, RedirectProps<{}> & Props>((props, ref) => {
    return (<RouterRedirect<{}> ref={ref as any} {...props} />);
  });
