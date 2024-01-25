import React from "react";

import PageNotFoundIcon from "../Assets/PageNotFoundIcon";

function PageNotFound() {
  const style = {
    color: "white",
    fontFamily: "Helvetica",
    fontSize: "40px",
    display: "flex",
    margin: "auto",
  };

  return (
    <div style={style}>
      <PageNotFoundIcon />
      <div
        style={{margin: "auto", marginLeft: "20px",}}>
        404: Page Not Found!
      </div>
    </div>
  );
}

export default PageNotFound;
