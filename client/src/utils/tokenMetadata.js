import ERC20d from "../contracts/ERC20d.json";
import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));
const metadataObject = { data: [], sum: 0, count: 0, avg: 0 };

 function parseValue(_value) {
  return convertHex(web3.utils.toBN(convertHex(_value)).div(web3.utils.toBN(convertHex(1e18))));
 }

 function divideValue(_a, _b) {
  return web3.utils.toBN(parseValue(_a)).div(web3.utils.toBN(_b));
 }

 function parseNumber(_number) {
  return parseValue(_number).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
 }

 function createTimestamp(_date) {
  return `${_date.getFullYear()}:${_date.getMonth()}:${_date.getDate()}`;
 }

function convertHex(_input) {
  return web3.utils.hexToNumberString(_input);
}

async function averageTransfer(_instance) {
  var metaData = metadataObject;
  await _instance.events.Transfer({ fromBlock: 0, toBlock: "latest"},
  (error,event) => {
     if(event !== null){
       var transferAmount = parseValue(event.returnValues.value);
       metaData.sum += parseFloat(transferAmount);
       metaData.data.push(transferAmount);
       metaData.count++;
     }
  }); if(metaData.sum !== 0 || metaData.count !== 0){
    metaData.avg = metaData.sum/metaData.data.length;
  } else {
    metaData.avg = 0;
  } return metaData;
}

const tokenMetadata = () =>
  new Promise(async(resolve, reject) => {
      const networkId = await web3.eth.net.getId();
      var tokenContract = ERC20d.networks[networkId];
      var tokenInstance = new web3.eth.Contract(ERC20d.abi,
        tokenContract && tokenContract.address,
      );
      tokenInstance.setProvider(web3.currentProvider)
      var volumeObject = await tokenInstance.methods.volume.call();
      var indexData = new Date(convertHex(volumeObject[0])*1000);
      var tokenVelocity = divideValue(volumeObject[1], 200000);
      var txObject = await averageTransfer(tokenInstance);
      var totalTransactions = parseNumber(txObject.count);
      var weeklyVolume = parseNumber(volumeObject[1]);
      var averageValue = parseNumber(txObject.avg);
      var weeklyIndex = createTimestamp(indexData);
      resolve([{
        totalTransactions,
        weeklyVolume,
        tokenVelocity,
        averageValue,
        weeklyIndex
      }])
});

export default tokenMetadata;
