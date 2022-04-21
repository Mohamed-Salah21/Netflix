import "./App.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes/Routes";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
