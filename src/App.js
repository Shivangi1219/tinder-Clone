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
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from './ChatScreen';

function App() {
  return (
    //BEM naming converntion for css classes
    <div className="app">
      {/* If you want header on every page just put it outside the Switch, : 
      any name after person*/}
      
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen/>
          </Route>  
          <Route path="/chat">
            <Header backButton="/" />
            <Chats/>
          </Route>
          <Route path="/">
            <Header />  
            <TinderCards />
            <SwipeButtons/>
          </Route>
          {/* Always have the default route in the bottom*/}
        </Switch>
      </Router>
    </div>
  );
}

        {/* Swipe Buttons */}
        {/* Chat screen*/}
        {/* Individual chat screens*/}

export default App;
