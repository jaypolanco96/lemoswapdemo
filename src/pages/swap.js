import React from "react";
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
              <button>gLEMO</button>
            </div>
          </div>
          <div className="topcontainer">
            <div
              style={{
                color: "rgb(86, 90, 105)",
                fontWeight: "0",
                fontFamily: "Inter",
              }}
              className="topheader"
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
              <button>MAX</button>
              <button>USDC</button>
            </div>
            <button id="swapbutton">Swap</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        }
        .swapbox {
          display: flex;
          flex-direction: column;
          width: 375px;
          height: 375px;
          background: #d9d9d9;
          box-shadow: #c5c5c5 1px 1px 0px inset;
          border-radius: 30px;
        }
        .topcontainer {
          height: 50px;
          border-radius: 12px;
          margin: 10px;
        }
        .topheader {
          margin: 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        code {
          font-size: 14px;
          color: rgb(86, 90, 105);
        }
        #inputs {
          border-style: none;
          background-color: #d9d9d9;
        }

        #maxbutton {
          height: 28px;
          border: 1px solid ;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          margin-right: 0.5rem;
          color: ;
        }
        button {
            cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Swap;
