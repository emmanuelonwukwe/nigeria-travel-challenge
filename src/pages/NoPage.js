import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <React.Fragment>
      <h1>404</h1>
	  <p>Page not found <Link to="/">Back to Home</Link></p>
    </React.Fragment>
  );
};

export default NoPage;
