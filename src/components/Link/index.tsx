import { Link as RouterLink, LinkProps } from "@reach/router";
import React from "react";
import { route } from "../../types/route";

interface Props {
  to?: route;
}

export const Link =
  React.forwardRef<RouterLink<{}>, LinkProps<{}> & Props>((props, ref) => {
    return (<RouterLink<{}> ref={ref as any} {...props} />);
  });
