import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
let Parent = () =>{
  return(
    <>
      {<App/>}
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Parent />);
