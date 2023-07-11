import React, { useEffect } from "react";
import client from "./zafClient";

function App() {
  useEffect(() => {
    client.invoke("resize", { width: "100%", height: "500px" });
  }, []);
  return (
    <div className="">
      Hi this is a sample app2
      <div className="font-extrabold">hihi</div>
      <div className="w-5 text-red-600 bg-blue-400 j-5">hel</div>
    </div>
  );
}

export default App;
