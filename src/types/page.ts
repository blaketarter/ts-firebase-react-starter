import { RouteComponentProps } from "@reach/router";
import { ReactElement } from "react";
import { route } from "./route";

export type PageProps = {
  path?: route;
  render: (props: RouteComponentProps) => ReactElement<any>;
} & RouteComponentProps;
