import React from "react";
import { useNavigate } from "react-router-dom";

function PageThree() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/page-two")}>prev</button>

      <button onClick={() => navigate("/")}>next</button>

      <h1>Hello, this is page three</h1>
    </div>
  );
}

export default PageThree;
