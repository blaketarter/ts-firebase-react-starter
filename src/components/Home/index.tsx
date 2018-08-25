import Loadable from "react-loadable";
import Loading from "../Loading";

export const HomeLoadable = Loadable({
  loader: () => import("./Home"),
  loading: Loading,
});
