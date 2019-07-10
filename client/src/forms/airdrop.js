import React, { Fragment, Component } from "react";

import { faEnvelope, faStarHalfAlt, faLayerGroup, faWallet, faHome, faFileSignature, faParachuteBox } from"@fortawesome/free-solid-svg-icons"
import { faTelegramPlane, faDiscord, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { firebaseConfiguration } from "../utils/firebaseConfig"
import firebase from "firebase"
import ReactGA from "react-ga";

import FieldText from "@atlaskit/field-text";
import Modal from "@atlaskit/modal-dialog"

class Airdrop extends Component {
  constructor(props){
      super(props)
      this.state = {
        airdropMetadata: {}
      }
 }

 componentWillMount = async() => {
   const firebaseDb = await firebase.initializeApp(firebaseConfiguration("airdrop"), "Airdrop");
   this.setState({ firebaseDb: firebaseDb.firestore() });
 }

  embedKey = (_event) => {
     if(_event.target.value.match("@") !== null && _event.target.value.match(".com") !== null ){
       this.state.airdropMetadata[_event.target.value] = {}
       this.setState({ email: _event.target.value });
     }
   }

   embedState = (_event) => {
     this.state.airdropMetadata[this.state.email][_event.target.name] = _event.target.value
   }

   submitApplication = async() => {
       var inputData = Object.entries(this.state.airdropMetadata);
       await this.state.firebaseDb.collection(inputData[0][0])
       .add(inputData[0][1]).then((docRef) => {
         console.log("Document written: ", docRef.id);
         this.props.triggerModal();
       }).catch((error) =>{
         console.error("Error adding document: ", error);
       }); ReactGA.event({
        category: 'Navigation',
        action: 'Airdrop',
        label: 'Submit'
      });
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
          <Modal className="modalForm" heading="VLDY Airdrop Application" appearance="warning" scrollBehaviour="outside"
            actions = {[
              { text: "Submit", onClick: this.submitApplication },
              { text: "Refuse", onClick: this.refuseApplication }
            ]}>
              <div className="formHead">
                <p className="formHighlight">AIRDROP TIER: 1; AIRDROP ROUND: 3</p>
                <p className="formHighlight">DISCLAIMER: ALL PARAMETERS MUST BE CORRECT TO BE COMPLIANT OF THE AIRDROP DISTRIBUTION.</p>
                <p className="formHighlight">ANY INCORRECT INFORMATION WILL BE FOLLOWED UP AND IF NO SWIFT REPSONSE FROM THE APPLICANT THEY WILL BE EXCLUDED.</p>
              </div>
              <div className="formBody">
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="E-Mail" required onChange={this.embedKey} name="email"/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faEnvelope} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your e-mail address
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Telegram Username" required onChange={this.embedState} name="telegram"/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faTelegramPlane} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your Telegram account present in <a href="https://t.me/ValidityCrypto">@ValidityCrypto</a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Discord Username" required onChange={this.embedState} name="discord"/>
                  <div className="formLabel" ref={r => {this.bottomRef = r;}}>
                    <FontAwesomeIcon  icon={faDiscord} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your account present in the Validity <a href="https://discord.gg/s5rSvB2">Discord</a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Twitter Username" required onChange={this.embedState} name="twitter"/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faTwitter} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your Twitter account that is following <a href="https://twitter.com/ValidityCrypto">@ValidityCrypto</a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Facebook Username" required onChange={this.embedState} name="facebook"/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faFacebook} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your facebook account that has liked Validity's <a href="https://www.facebook.com/ValidityCrypto/">Facebook</a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Ethereum Address" required onChange={this.embedState} name="wallet"/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faWallet} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Ethereum <a href="https://www.myetherwallet.com">wallet</a> address for the recieving the airdrop allocation
                  </div>
              </div>
            </div>
         </Modal>
      )
    } else if(this.props.submitState){
      return(
        <Modal actions = {[{ text: "Dismiss", onClick: () => this.props.triggerSubmit }]} appearance="warning" heading="Submission Successful" width="500px">
          You are now registered for the VLDY airdrop.
          <p className="warn"> For any queries or validating submissions contact airdrop@validity.ae </p>
          Thank you for participating and have a nice day!
        </Modal>
      )
    }
    return(
      <Fragment/>
    )
  }
}

export default Airdrop;
