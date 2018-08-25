import Loadable from "react-loadable";
import Loading from "../Loading";

export const SignUpLoadable = Loadable({
  loader: () => import("./SignUp"),
  loading: Loading,
});
