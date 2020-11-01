import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import favicon from "../favicon.png";
import "./mainlayout.css";
function MainLayout({ drizzle, drizzleState }) {
  useEffect(() => { //metamask connection
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
      getAccount();
    }
    const ethereumButton = document.querySelector(".enableEthereumButton");
    const walletnumber = document.getElementById("walletnumber");

    ethereumButton.addEventListener("click", () => {
      getAccount();
    });

    async function getAccount() {
      const ethereum = window.ethereum;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      walletnumber.innerHTML =
        account[0] +
        account[1] +
        account[2] +
        account[3] +
        account[4] +
        account[5] +
        "..." +
        account[38] +
        account[39] +
        account[40] +
        account[41];
    }
  }, []);
  // destructure drizzle and drizzleState from props
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Link to="/">
            <img id="favicon" src={favicon} alt="favicon"></img>
          </Link>
          <Link to="/">
            <h3 id="home">Home</h3>
          </Link>
          <Link to="/about">
            <h3>About</h3>
          </Link>
          <Link to="/">
            <button id="unlockbutton" className="enableEthereumButton">
              <h3 id="walletnumber">Unlock Wallet</h3>
            </button>
          </Link>
        </div>

        <Switch>
          <Route exact path="/">
            <Home drizzle={drizzle} drizzleState={drizzleState}/>
          </Route>
          <Route exact path="/about">
            <About drizzle={drizzle} drizzleState={drizzleState}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MainLayout;