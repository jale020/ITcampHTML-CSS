import React from "react";
import App from "./App";

import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/Home"} element={<h1>Home</h1>} />
        <Route path={"/Welcome"} element={<h1>Welcome</h1>} />
      </Routes>

      <div>
        <Link to={"/"}>
          <h1>Welcome</h1>
        </Link>
        <Header />
        <Navbar/>
      </div>
    </div>
  );
};

export default App;
