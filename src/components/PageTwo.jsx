import React from "react";
import { useNavigate } from "react-router-dom";

function PageTwo() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>prev</button>

      <button onClick={() => navigate("/page-three")}>next</button>

      <h1>Hello, this is page two</h1>
    </div>
  );
}

export default PageTwo;
