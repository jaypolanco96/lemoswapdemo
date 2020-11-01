import React from "react";
import Helmet from "react-helmet";
import favicon from "../favicon.png";
import lemonicon from "../lemonicon.png";
import { newContextComponents } from "@drizzle/react-components";
const { ContractData } = newContextComponents;
function Home({ drizzle, drizzleState }) {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000"></meta>
        <meta name="msapplication-navbutton-color" content="#000"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#000"
        ></meta>
      </Helmet>
      <div className="heading">
        <img id="headingimg" src={favicon} alt="favicon"></img>
      </div>
      <div className="headingtitle">
        <h1 className="title">ChefLemo is Ready</h1>
        <h3 className=" description">
          Stake LemonSwap LP tokens to claim your very own $GUAVA
        </h3>
      </div>
      <div className="cards">
        <div className="card">
          <img id="lemonimg" src={lemonicon} alt="lemonicon"></img>
          <div className="stats">
            Your gLEMO Balance
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TutorialToken"
              method="balanceOf"
              methodArgs={[drizzleState.accounts[0]]}
            />
          </div>
        </div>
        <div className="card">
          <div className="stats">
            Total gLEMO Supply
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TutorialToken"
              method="totalSupply"
              methodArgs={[{ from: drizzleState.accounts[0] }]}
            />{" "}
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TutorialToken"
              method="symbol"
              hideIndicator
            />
          </div>
        </div>
        <footer id="homefooter">
          <a id="footerlinks" href="http://github.com">
            LemoSwap Contract
          </a>
          <a id="footerlinks" href="http://github.com">
            Whitepaper
          </a>
          <a id="footerlinks" href="http://github.com">
            Dev
          </a>
        </footer>
      </div>
      <style jsx>{`
        .title {
          font-family: "Kaushan Script", sans-serif;
          font-size: 36px;
          text-align: center;
          font-weight: 700;
          margin: 0px;
          padding: 0px;
        }
        .heading {
          margin: 0px;
          display: flex;
          justify-content: center;
        }
        .headingtitle {
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .description {
          color: #4b4b4b;
          font-size: 18px;
          font-weight: 400;
          margin: 0px;
          padding: 0px;
          text-align: center;
        }
        #headingimg {
          display: flex;
          height: 130px;
        }
        .cards {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }
        .card {
          display: flex;
          background: #d3d3d3;
          box-shadow: #c5c5c5 1px 1px 0px inset;
          width: 400px;
          height: 110px;
          margin: 10px;
          border-radius: 12px;
        }
        #lemonimg {
          margin: 25px -50px 0px 25px;
          height: 50px;
        }
        .stats {
          display: flex;
          width: 100%;
          justify-content: center;
          flex-direction: column;
        }
        #homefooter {
            position: fixed;
            width: 100%;
            left: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
          }

          #footerlinks {
            margin: 30px;
          }
        @media only screen and (max-width: 800px) {
          .cards {
            flex-direction: column;
          }
          .card {
            display: flex;
            width: 80%;
          }
          #lemonimg {
            height: 50px;
          }
          #homefooter {
            position: fixed;
            width: 100%;
            left: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
          }

          #footerlinks {
            margin: 5px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
