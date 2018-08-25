import Loadable from "react-loadable";
import Loading from "../Loading";

export const SignInLoadable = Loadable({
  loader: () => import("./SignIn"),
  loading: Loading,
});
