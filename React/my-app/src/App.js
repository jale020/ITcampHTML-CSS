import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

ReactDom.div(document.getElementById("root")).render 