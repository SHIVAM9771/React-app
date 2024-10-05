import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"
import TextForm from "./components/TextForm";


function App() {
  let data = {
    t1: "Service 1",
    t2: "This is service 2",
    t3: "Service 3"
  }

  return (
    <>
      <Navbar title="Stockify" data={data} />
      <div className="container">
        <TextForm heading="Enter the text to analyze below" />
      </div>

    </>
  );
}

export default App;