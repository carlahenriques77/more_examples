import React from "react";

// import / react router
import { useParams } from "react-router-dom";

function Info(props) {
  const { productID } = useParams();

  return (
    <div>
      <h1>Info about Product: {productID}</h1>
    </div>
  );
}

export default Info;
