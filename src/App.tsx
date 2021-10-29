import "react-toastify/dist/ReactToastify.css"; // Notification styles
import "./styles/app.scss"; // Styles

import { BrowserRouter as Router } from "react-router-dom"; //Router

import React from "react";

// Layout
import Header from "./components/Header";
import Body from "./components/Body";

require("dotenv").config(); // Environement variables

function App() {
  return (
    <>
      <Router>
        <Header />
        <Body />
      </Router>
    </>
  );
}

export default App;
