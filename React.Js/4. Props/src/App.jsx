import React from "react";
import Chile from "./Chile";

const App = () => {
  function getdata(data) {
    console.log("Data from Child", data);
  }
  return (
    <div>
      <Chile sendData={getdata}/>
    </div>
  );
};

export default App;
