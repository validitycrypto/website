import React, { Fragment, Component } from "react";
import ReactGA from "react-ga";

import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faBullhorn } from"@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

import ERC20d from "../contracts/ERC20d.json";

import TextField from "@atlaskit/field-text"
import Button from "@atlaskit/button"

import "../assets/css/register.css";

class Register extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
 }

 componentWillMount = () => {
   ReactGA.pageview('/Register');
   this.setState({
     componentPhase: this.phaseOne()
   })
 }

 triggerWeb3 = async() => {
   const metaMask = await this.props.initialiseWeb3();
   const accounts = await metaMask.web3.eth.getAccounts();
   const tokenContract = ERC20d.networks[metaMask.network];
   const tokenInstance = new metaMask.web3.eth.Contract(ERC20d.abi,
     tokenContract && tokenContract.address,
   ); tokenInstance.options.address = "0x904da022abcf44eba68d4255914141298a7f7307";
   this.setState({
     componentPhase: this.phaseTwo(),
     network: metaMask.network,
     account: accounts[0],
     token: tokenInstance,
     web3: metaMask.web3,
   });
 }

 generateId = async() => {
   await new Promise((resolve, reject) =>
     this.state.token.methods.conformIdentity()
     .send({ from: this.state.account, gas: 3725000})
     .on('confirmation', (confirmationNumber, receipt) => {
       if(confirmationNumber === 1){
         ReactGA.event({ category: 'Transactional',
         action: 'conformIdentity', label: 'True' })
         this.setState({
           componentPhase: this.phaseThree()
         }); resolve(receipt)
       }
     }).on('error', (error) => {
       ReactGA.event({ category: 'Transactional',
       action: 'conformIdentity', label: 'False' })
     })
   )
 }

 dummmyId = () => {
   this.setState({
     componentPhase: this.phaseThree()
   });
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

phaseTwo = () => {
 return (
  <Fragment>
   <div className="registrationTitle">Generate an ValidityID</div>
   <Button className="web3Button" onClick={this.dummmyId}>
     &nbsp;Generate&nbsp;
   </Button>
 </Fragment>
 )
}


phaseThree = () => {
 return (
  <Fragment>
   <div className="registrationTitle" color="#5aff9c">Verify your idenity</div>
   <Button href="https://twitter.com/intent/tweet?text=I%20am%20verifying%200xffcc3443%20as%20my%20Identity%20for%20@ValidityCrypto%20($VLDY)"
    className="web3Button"
    target="_blank">
     &nbsp;Tweet&nbsp;
   </Button>
 </Fragment>
 )
}

 render() {
   return(
     <div className="navigationPage">
      <Page>
        <GridColumn layout="compact">
          {this.state.componentPhase}
        </GridColumn>
        </Page>
     </div>
   )
  }
}

export default Register;
