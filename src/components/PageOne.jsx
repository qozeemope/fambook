import React from "react";
import { useNavigate } from "react-router-dom";

function PageOne() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/page-three")}>prev</button>

      <button onClick={() => navigate("/page-two")}>next</button>

      <h1>Hello, this is page one</h1>
    </div>
  );
}

export default PageOne;
