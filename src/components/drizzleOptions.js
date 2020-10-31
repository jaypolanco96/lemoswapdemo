import TutorialToken from "../contracts/TutorialToken.json";

const options = {
  web3: {
    block: false,
  },
  contracts: [TutorialToken],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

export default options;