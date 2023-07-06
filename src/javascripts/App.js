import React, { useEffect } from "react";
import client from "./zafClient";

function App() {
  useEffect(() => {
    client.invoke("resize", { width: "100%", height: "500px" });
  }, []);
  return <div>Hi this is a sample app2</div>;
}

export default App;
