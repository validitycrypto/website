import React, { Fragment, Component } from "react";
import ReactGA from "react-ga";
import firebase from "firebase"

import { firebaseConfiguration } from "../utils/firebaseConfig"
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faBullhorn } from"@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

import ERC20d from "../contracts/ERC20d.json";

import TextField from "@atlaskit/textfield"
import { Loader } from 'react-loaders'
import Button from "@atlaskit/button"

import "../assets/css/register.css";

const ZERO = "0x0000000000000000000000000000000000000000";
const TOKEN = "0x293b7712fb8e57e8637287f18b61945be78b8e27";

class Register extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
 }

 componentWillMount = () => {
   const firebaseDb = firebase.initializeApp(firebaseConfiguration("verify"), "Verify")
   ReactGA.pageview('/Register');
   this.setState({
     firebaseDb: firebaseDb.firestore(),
     componentPhase: this.phaseOne()
   })
 }

 triggerWeb3 = async() => {
   const metaMask = await this.props.initialiseWeb3();
   const accounts = await metaMask.web3.eth.getAccounts();
   const tokenContract = ERC20d.networks[metaMask.network];
   const tokenInstance = new metaMask.web3.eth.Contract(ERC20d.abi,
     tokenContract && tokenContract.address,
   ); tokenInstance.options.address = TOKEN;
   await this.setState({
     network: metaMask.network,
     account: accounts[0],
     token: tokenInstance,
     web3: metaMask.web3,
   }); await this.networkCheck(metaMask.network);
 }

 networkCheck = async(_network) => {
   if(_network !== 4){
     this.setState({
       componentPhase: this.renderError("Wrong Network!")
     })} else {
      var stateValidity = await this.checkState(this.state.account);

      if(stateValidity){ this.setState({
         componentPhase: this.renderError("You've already been verified!")
      })} else if(!stateValidity) {
        await this.getId();
        this.setState({
          componentPhase: this.phaseTwo()
      });
     }
   }
 }

 getId = async() => {
    const id = await this.state.token.methods.validityId(this.state.account).call();
    const zk = await this.state.token.methods.validityId(ZERO).call();
    this.setState({
      id, zk
    });
 }

 generateId = async() => {
   return await new Promise((resolve, reject) =>
     this.state.token.methods.conformIdentity()
     .send({ from: this.state.account, gas: 3725000})
     .on('confirmation', (confirmationNumber, receipt) => {
       if(confirmationNumber === 1){
         ReactGA.event({ category: 'Transactional',
         action: 'conformIdentity', label: 'True' })
         resolve(receipt);
       }
     }).on('error', (error) => {
       ReactGA.event({ category: 'Transactional',
       action: 'conformIdentity', label: 'False' })
       resolve(false);
     })
   )
 }

 checkState = async(_input) => {
   const stateStatus = await this.state.firebaseDb.collection(_input)
    .limit(1).get().then((result) => {
     var outputValue;
     result.forEach(item => {
        outputValue = item.data().validity;
      }); return outputValue;
    }); if(stateStatus) return true;
    else return false;
  }

 embedState = async(_input) => {
   this.state.firebaseDb.collection(_input)
    .add({
      validity: true
    });
 }

 executeSovergnity = async() => {
   this.setState({
     componentPhase: this.transactionPending()
   }); var txValidity = await this.generateId();

   if(txValidity !== false) {
     await this.getId();
     this.setState({
       componentPhase: this.phaseThree()
     });
   }
 }

 verifyTweet = async(_tweetId) => {
   await fetch('http://localhost/tweet', {
     body: JSON.stringify({ id: _tweetId }),
     headers: {
       'Content-Type': 'application/json',
        'Accept': 'application/json'
     },
     mode: 'cors',
     method: 'POST'
   }).then(response => {
     return response.json()
   }).then(data =>
     this.setState(data)
   );
 }

 parseTweet = async(event) => {
   var tweetIdentifier = event.target.value.split('/')[5];
   await this.verifyTweet(tweetIdentifier);
   var validity = await this.checkState(this.state.twitterUser);

   if(this.state.validityId === this.state.id && !validity){
     await this.embedState(this.state.twitterUser);
     await this.embedState(this.state.account);
     this.setState({
       componentPhase: this.phaseFour()
     });
   } else if(validity){
     this.setState({
       componentPhase:
       this.renderError(
         "User is already verified."
       )});
    }
 }


 phaseOne = () => {
  return (
   <Fragment>
    <div className="registrationTitle">Connect via Web3</div>
    <Button className="web3Button" onClick={this.triggerWeb3}>
      &nbsp;Connect&nbsp;
    </Button>
  </Fragment>
  )
}

renderError = (_errorMessage) => {
  return (
   <Fragment>
    <div className="errorTitle">{_errorMessage}</div>
  </Fragment>
  )
}


 phaseFour = () => {
  return (
   <Fragment>
    <div className="verifiedTitle">Verified!</div>
  </Fragment>
  )
}

phaseTwo = () => {
  if(this.state.id === this.state.zk){
  return (
    <Fragment>
    <div className="registrationTitle">Generate an ValidityID</div>
    <Button className="web3Button" onClick={this.executeSovergnity}>
     &nbsp;Generate&nbsp;
     </Button>
   </Fragment>
  )} else {
    return this.phaseThree();
  }
}

transactionPending = () => {
 return (
  <Fragment>
   <div className="pendingTitle" color="#5aff9c">Transaction pending...</div>
   <div className="verificationState">
    <Loader size="Large" color="#ffa500" type="ball-triangle-path" active />
   </div>
 </Fragment>
 )
}


phaseThree = () => {
 return (
  <Fragment>
   <div className="registrationTitle" color="#5aff9c">Verify your idenity</div>
   <div className="verificationState">
    <Loader size="Large" color="#815aff" type="ball-triangle-path" active />
   </div>
   <TextField onChange={this.parseTweet} className="tweetInput" width="xlarge"/>
   <a href={`https://twitter.com/intent/tweet?text=I%20am%20verifying%20${this.state.id}%20as%20my%20identity%20for%20@ValidityCrypto.%0A%0ALet%27s%20clean%20up%20%23crypto%20with%20$VLDY%20%E2%99%BB%EF%B8%8F%0Avldy.org`}
   target="_blank">
   <Button className="web3Button">
     &nbsp;Tweet&nbsp;
   </Button>
   </a>
 </Fragment>
 )
}

 render() {
   return(
     <div className="navigationPage">
      <Page>
        <GridColumn layout="compact">
          <div className="modalStack">
          {this.state.componentPhase}
          </div>
        </GridColumn>
        </Page>
     </div>
   )
  }
}

export default Register;
