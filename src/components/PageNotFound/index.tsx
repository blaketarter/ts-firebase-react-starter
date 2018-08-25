import { RouteComponentProps } from "@reach/router";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`;

export function PageNotFound(_: RouteComponentProps) {
  return <Wrapper>not found</Wrapper>;
}
