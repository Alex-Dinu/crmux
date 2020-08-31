import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import SignOut from "./screens/SignOut";
import SignIn from "./screens/SignIn";
import CustomersScreen from "./screens/CustomersScreen";
import CustomerScreen from "./screens/CustomerScreen";
import HelpScreen from "./screens/HelpScreen";
import InteractionMaintenanceContainer from "./components/interactions/InteractionMaintenanceContainer";

function App() {
  //TODO: Jest
  // const openMenu = () => {
  //   document.querySelector(".sidebar").classList.add("open");
  // };

  // const closeMenu = () => {
  //   document.querySelector(".sidebar").classList.remove("open");
  // };
  return (
    <BrowserRouter>
      <div className="header">
        <nav id="hamnav">
          <label htmlFor="hamburger">&#9776;</label>
          <input type="checkbox" id="hamburger" />

          <div id="hamitems">
            <a href="/">Home</a>
            <a href="/customersscreen">Customers</a>
            <a href="/signin">Sign In</a>
            <a href="/helpscreen">Help</a>
          </div>
        </nav>
      </div>

      <div className="main">
        {/* <div className="content"> */}
        <Route
          path="/interaction"
          component={InteractionMaintenanceContainer}
        />
        <Route path="/customerscreen" component={CustomerScreen} />
        <Route path="/customersscreen" component={CustomersScreen} />
        <Route path="/helpscreen" component={HelpScreen} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" exact={true} component={HomeScreen} />
        {/* </div> */}
      </div>
      <footer>All rights preserved.</footer>
    </BrowserRouter>
  );
}

export default App;
