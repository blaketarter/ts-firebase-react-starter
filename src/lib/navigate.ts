import { navigate as routerNavigate } from "@reach/router";
import { route } from "../types/route";

export const navigate = (to: route) => routerNavigate(to);
