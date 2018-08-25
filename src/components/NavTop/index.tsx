import React from "react";
import { Link } from "../Link";

export function NavBarTop() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/sign-out">Sign Out</Link>
    </>
  );
}
