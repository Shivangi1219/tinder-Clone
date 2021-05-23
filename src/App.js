import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    //BEM naming converntion for css classes
    <div className="app">
      {/* If you want header on every page just put it outside the Router*/}
      <Header />
      <Router>
        <Switch>
        <Route path="/chat">
            <h1>I am on chatpage</h1>
          </Route>
          <Route path="/">
            <h1>I am on homepage</h1>
          </Route>
          {/* Always have the default route in the bottom*/}
        </Switch>
      </Router>
    </div>
  );
}

        {/* 
        <TinderCards />
        {/* Swipe Buttons */}
        {/* Chat screen*/}
        {/* Individual chat screens*/}

export default App;
