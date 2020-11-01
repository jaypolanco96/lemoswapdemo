import React from "react";

function Swap({ drizzle, drizzleState }) {
  return (
    <div>
      <div className="swapbox">
        From
        <input></input>
        To
        <input></input>
        <br></br>
        <button>Swap</button>
      </div>
      <style jsx>{`
        .swapbox {
            margin: 10px;
            display:flex;
            flex-direction: column;
            justify-content: center;
            width: 420px;
            background: #d9d9d9;
          box-shadow: #c5c5c5 1px 1px 0px inset;

          border-radius: 30px;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}

export default Swap;
