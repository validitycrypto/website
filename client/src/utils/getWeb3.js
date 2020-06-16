import Web3 from "web3";

const getWeb3 = () =>
  new Promise(async(resolve, reject) => {

      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          resolve(web3);
        } catch (error) {
          reject(false);
        }
      }
      else if (window.web3) {
        const web3 = window.web3;

        resolve(web3);
    } else {
      resolve(false);
    }
  });

export default getWeb3;
