import React from "react";
import { BrowserRouter as Router, Outlet, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Outlet>
        <Route path="/" />
      </Outlet>
    </Router>
  );
}

export default App;
