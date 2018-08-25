import Loadable from "react-loadable";
import Loading from "../Loading";

export const SignOutLoadable = Loadable({
  loader: () => import("./SignOut"),
  loading: Loading,
});
