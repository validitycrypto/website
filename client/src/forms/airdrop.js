import React, { Fragment, Component } from "react";

import { AIRDROP_WALLET, AIRDROP_TWITTER, AIRDROP_FACEBOOK, AIRDROP_TELEGRAM, AIRDROP_DISCORD } from '../constants/forms';
import { PURPLE_SECONDARY, GREEN_SECONDARY } from '../constants/palette';

import { faTelegramPlane, faDiscord, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faWallet } from"@fortawesome/free-solid-svg-icons"
import { firebaseConfiguration } from "../utils/firebaseConfig"
import firebase from "firebase"
import ReactGA from "react-ga";

import Confirmation from "../components/confirmation";
import Input from '../components/input';

import Paper from '@material-ui/core/Paper';
import Button from '@atlaskit/button'

const airdropParameters = [
  'discord',
  'telegram',
  'facebook',
  'twitter',
  'wallet'
];

class Airdrop extends Component {
  constructor(props){
      super(props)
      this.state = {
        airdropMetadata: {},
      }
 }

 initialiseFirebase = async() => {
    const firebaseDb = firebase.initializeApp(
     firebaseConfiguration("airdrop"), "Airdrop"
   ); this.setState({
     firebaseDb: firebaseDb.firestore()
    });
 }

  embedKey = (_event) => {
     if(_event.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
       this.state.airdropMetadata[_event.target.value] = {}
       this.setState({ email: _event.target.value });
     }
   }

   embedState = (_event) => {
     this.state.airdropMetadata[this.state.email][_event.target.name] = _event.target.value
   }

   submitApplication = async() => {
     var targetComponent = document.getElementsByName("email")[0];

     targetComponent.style.background = "";
     targetComponent.style.border = "";
    await this.errorConditioning(false);
     if(!this.state.airdropMetadata[this.state.email]){
       targetComponent.style.background = "rgba(255, 171, 0, 0.5)";
       targetComponent.style.border = "5px solid rgba(255, 171, 0, 0.25)";
     } else if(await this.validateSubmission()){
       var inputData = Object.entries(this.state.airdropMetadata);
       await this.state.firebaseDb.collection(inputData[0][0])
       .add(inputData[0][1]).then((docRef) => {
         console.log("Document written: ", docRef.id);
         this.props.triggerModal();
        this.props.triggerSubmit();
       }).catch((error) =>{
         console.error("Error adding document: ", error);
       }); ReactGA.event({
        category: 'Navigation',
        action: 'Airdrop',
        label: 'Submit'
      })} else await this.errorConditioning(true)
  }

    errorConditioning = async(_bool) => {
      var backgroundState = _bool ? "rgba(255, 171, 0, 0.5)" : "";
      var borderState = _bool ? "5px solid rgba(255, 171, 0, 0.25)" : "";
      await this.state.errorLog.forEach((_value) => {
          var targetComponent = document.getElementsByName(_value)[0];
          targetComponent.style.background = backgroundState;
          targetComponent.style.border = borderState;
      });
    }

   validateSubmission = async() => {
    await this.setState({ errorLog: [] })
    if(!this.state.airdropMetadata[this.state.email]) return false
    await airdropParameters.forEach((_value) => {
       if(!this.state.airdropMetadata[this.state.email][_value]){
         this.state.errorLog.push(_value);
       }
    }); if(this.state.errorLog.length === 0) return true;
    else return false;
  }

  refuseApplication = async() => {
     await this.props.triggerModal();
     ReactGA.event({
       category: 'Navigation',
      action: 'Airdrop',
      label: 'Refuse'
    });
  }

  render() {
    const { submitState, triggerSubmit } = this.props;

      if(submitState){
        return(
          <div className="navigationPage">
            <div color={GREEN_SECONDARY}>Application successful</div>
            <div className="confirmationState">
              <Confirmation />
            </div>
         </div>
       );
      } else {
        return(
        <div className="navigationPage">
          <Paper style={{ backgroundColor: PURPLE_SECONDARY }} className="formBody">
            <header div className="formHeader">
              <h1> AIRDROP TIER 1, ROUND 3</h1>
              <h5> DISCLAIMER: ALL PARAMETERS MUST BE CORRECT TO BE COMPLIANT OF THE AIRDROP DISTRIBUTION. ANY INCORRECT INFORMATION WILL BE FOLLOWED UP AND IF NO SWIFT REPSONSE FROM THE APPLICANT THEY WILL BE EXCLUDED.</h5>
            </header>
            <Input textComponent='Your email address' triggerFunction={this.embedKey} icon={faEnvelope} name='email' label='E-Mail Adddress' />
            <Input textComponent={AIRDROP_TELEGRAM} triggerFunction={this.embedState} icon={faTelegramPlane} name='telegram' label='Telegram Username' />
            <Input textComponent={AIRDROP_DISCORD} triggerFunction={this.embedState} icon={faDiscord} name='discord' label='Discord Username' />
            <Input textComponent={AIRDROP_TWITTER} triggerFunction={this.embedState} icon={faTwitter} name='twitter' label='Twitter Username' />
            <Input textComponent={AIRDROP_FACEBOOK} triggerFunction={this.embedState} icon={faFacebook} name='facebook' label='Facebook Username' />
            <Input textComponent={AIRDROP_WALLET} triggerFunction={this.embedState} icon={faWallet} name='wallet' label='Ethereum Address' />
            <Button appearance='help' onClick={triggerSubmit}> Submit </Button>
         </Paper>
        </div>
      );
    }
  }
}

export default Airdrop;
