import React from "react";
import { LoadingComponentProps } from "react-loadable";

function Loading(props: LoadingComponentProps) {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

export default Loading;
