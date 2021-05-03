import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderResp from "./components/HeaderResp";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const headerComponent = () => {
  if (window.innerWidth < 800) {
    return <HeaderResp />;
  } else {
    return <Header />;
  }
};
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkot">{headerComponent}</Route>
          <Route path="/">
            {headerComponent()}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
