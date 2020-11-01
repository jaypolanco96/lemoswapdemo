import React from "react";
import downarrow from '../downarrow.svg'
import { newContextComponents } from "@drizzle/react-components";
const { ContractData } = newContextComponents;
function Swap({ drizzle, drizzleState }) {
  return (
    <div>
      <div className="container">
        <div className="swapbox">
          <div className="topcontainer">
            <div
              style={{
                color: "rgb(86, 90, 105)",
                fontWeight: "0",
                fontFamily: "Inter",
              }}
              className="topheader"
            >
              From
              <div>
                Balance:{" "}
                <ContractData
                  drizzle={drizzle}
                  drizzleState={drizzleState}
                  contract="TutorialToken"
                  method="balanceOf"
                  methodArgs={[drizzleState.accounts[0]]}
                />
              </div>
            </div>
            <div className="topheader">
              <input
                style={{
                  color: "rgb(86, 90, 105)",
                  fontWeight: "0",
                  fontFamily: "Inter",
                }}
                id="inputs"
                placeholder="0.0"
              ></input>
              <button id="maxbutton">MAX</button>
              <button id="coinbutton">gLEMO</button>
            </div>
          </div><div><img id="downarrow"src={downarrow} alt="downarrow"></img></div>
          <div className="topcontainer">
            <div
              style={{
                color: "rgb(86, 90, 105)",
                fontWeight: "0",
                fontFamily: "Inter",
              }}
              className="topheader2"
            >
                
              To
              <div>
                Balance:{" "}
                <ContractData
                  drizzle={drizzle}
                  drizzleState={drizzleState}
                  contract="TutorialToken"
                  method="balanceOf"
                  methodArgs={[drizzleState.accounts[0]]}
                />
              </div>
            </div>
            <div className="topheader2">
              <input
                style={{
                  color: "rgb(86, 90, 105)",
                  fontWeight: "0",
                  fontFamily: "Inter",
                }}
                id="inputs"
                placeholder="0.0"
              ></input>

              <button id="maxbutton">MAX</button>
              <button id="coinbutton">USDC</button>
            </div>
            <div className="topheader2">
              <div
                style={{
                  color: "rgb(86, 90, 105)",
                  fontWeight: "0",
                  fontFamily: "Inter",
                }}
                placeholder="0.0"
              >
                Price
              </div>
              <div
                style={{
                  color: "rgb(86, 90, 105)",
                  fontWeight: "0",
                  fontFamily: "Inter",
                }}
                placeholder="0.0"
              >
                1.01 ETH per gLEMO
              </div>
            </div>
            <button id="swapbutton">Swap</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .swapbox {
          display: flex;
          flex-direction: column;
          width: 420px;
          height: 360px;
          background: #d9d9d9;
          box-shadow: #c5c5c5 1px 1px 0px inset;
          border-radius: 30px;
        }
        .topcontainer {
          height: 50px;
          border-radius: 12px;
          margin: 5px 15px 50px 10px;
        }
        .topheader {
            margin: 20px 20px 20px 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .topheader2 {
            margin: 0px 20px 20px 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        #inputs {
          font-size: 24px;
          width: 170px;
          border-style: none;
          background-color: #d9d9d9;
        }

        #maxbutton {
          height: 28px;
          border-style: none;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        #swapbutton {
          font-family: "Inter";
          color: #fff;
          background-color: #4b4b4b;
          font-size: 16px;
          font-weight: 500;
          height: 62px;
          width: 100%;
          border-radius: 12px;
          border-style: none;
        }
        button {
          cursor: pointer;
        }
        #coinbutton {
          height: 28px;
          border-style: none;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
        }
        #downarrow {
            margin: 5px;
            height: 16px;
        }
        @media only screen and (max-width: 600px) {
          .swapbox {
            width: 380px;
          }
        }
      `}</style>
    </div>
  );
}

export default Swap;
