import { isEmpty, isLoaded } from "react-redux-firebase";

export const isAuthenticated = (authState: any) => {
  return isLoaded(authState) && !isEmpty(authState);
};
