import React, { Fragment, Component } from "react";

import { faEnvelope, faStarHalfAlt, faLayerGroup, faWallet, faHome, faFileSignature, faParachuteBox } from"@fortawesome/free-solid-svg-icons"
import { faTelegramPlane, faDiscord, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { firebaseConfiguration } from "../utils/firebaseConfig"
import firebase from "firebase"
import ReactGA from "react-ga";

import FieldText from "@atlaskit/field-text";
import Modal from "@atlaskit/modal-dialog"

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
        formActions: [
          { text: "Submit", onClick: this.submitApplication },
          { text: "Refuse", onClick: this.refuseApplication },
        ],
        errorLog: []
      }
 }

 componentWillMount = async() => {
   const firebaseDb = await firebase.initializeApp(firebaseConfiguration("airdrop"), "Airdrop");
   this.setState({ firebaseDb: firebaseDb.firestore() });
   if(window.screen.width < 800){
     await this.state.formActions.push({ text: "Scroll", onClick: this.scrollForm });
   }
 }

  embedKey = (_event) => {
     if(_event.target.value.match("@") !== null && _event.target.value.match(".") !== null ){
       this.state.airdropMetadata[_event.target.value] = {}
       this.setState({ email: _event.target.value });
     }
   }

   embedState = (_event) => {
     this.state.airdropMetadata[this.state.email][_event.target.name] = _event.target.value
   }

   scrollForm = (event) => {
     var currentState = document.getElementsByClassName("formBody")[0].style.transform;
     var newValue = parseInt(currentState.replace(/\D/g,''));
     if(currentState === "") newValue = -1 * 100;
     else if(newValue > 750) newValue = 0;
     else newValue = -1 * (newValue + 75);
     document.getElementsByClassName("formBody")[0].style.transform = `translateY(${newValue}px)`;
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
    if(this.props.triggerState){
      return(
          <Modal stackIndex="1" heading="VLDY Airdrop Application" appearance="warning" shouldCloseOnOverlayClick
            actions = {this.state.formActions}>
            <div className="formBody">
                <p className="formHighlight">AIRDROP TIER: 1; AIRDROP ROUND: 3</p>
                <p className="formHighlight">DISCLAIMER: ALL PARAMETERS MUST BE CORRECT TO BE COMPLIANT OF THE AIRDROP DISTRIBUTION.</p>
                <p className="formHighlight">ANY INCORRECT INFORMATION WILL BE FOLLOWED UP AND IF NO SWIFT REPSONSE FROM THE APPLICANT THEY WILL BE EXCLUDED.</p>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="E-Mail" required onChange={this.embedKey} name="email"/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faEnvelope} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your e-mail address
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Telegram Username" required onChange={this.embedState} name="telegram"/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faTelegramPlane} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your Telegram account present in <a href="https://t.me/ValidityCrypto"><b>@ValidityCrypto</b></a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Discord Username" required onChange={this.embedState} name="discord"/>
                  <div className="formLabel" ref={r => {this.bottomRef = r;}}>
                    <FontAwesomeIcon  icon={faDiscord} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your account present in the Validity <a href="https://discord.gg/s5rSvB2"><b>Discord</b></a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Twitter Username" required onChange={this.embedState} name="twitter"/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faTwitter} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your Twitter account that is following <a href="https://twitter.com/ValidityCrypto"><b>@ValidityCrypto</b></a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Facebook Username" required onChange={this.embedState} name="facebook"/>
                  <div className="formLabel">
                    <FontAwesomeIcon icon={faFacebook} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your facebook account that has liked Validity's <a href="https://www.facebook.com/ValidityCrypto/"><b>Facebook</b></a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Ethereum Address" required onChange={this.embedState} name="wallet"/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faWallet} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Ethereum <a href="https://www.myetherwallet.com"><b>wallet</b></a> address for the recieving the airdrop allocation
                  </div>
              </div>
              </div>
         </Modal>
      )
    } else if(this.props.submitState){
      return(
        <Modal actions = {[{ text: "Dismiss", onClick: this.props.triggerSubmit }]} appearance="warning" heading="Submission Successful" width="500px">
          You are now registered for airdrop tier 1, round 3. For any queries or validating submissions contact:
          <br></br><br></br>
          <a><b>airdrop@vldy.org</b></a>
          <br></br><br></br>
          Thank you for participating and have a nice day!
        </Modal>
      )
    } else {
      return (
        <Fragment/>
      )
    }
  }
}

export default Airdrop;
