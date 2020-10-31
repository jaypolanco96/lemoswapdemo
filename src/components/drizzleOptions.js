import TutorialToken from "../contracts/TutorialToken.json";
var Web3 = require("web3");
const options = {
  web3: {
    block: false,
  },

  customProvider: new Web3(
    "wss://goerli.infura.io/ws/v3/6cfacdbd48f848978721305a8b386143"
  ),

  contracts: [TutorialToken],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

export default options;
