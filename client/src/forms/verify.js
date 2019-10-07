import React, { Fragment, Component } from "react";

import { faEnvelope, faStarHalfAlt, faLayerGroup, faWallet, faHome, faFileSignature, faParachuteBox } from"@fortawesome/free-solid-svg-icons"
import { faTelegramPlane, faDiscord, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { firebaseConfiguration } from "../utils/firebaseConfig"
import { Checkbox } from '@atlaskit/checkbox';
import firebase from "firebase"
import ReactGA from "react-ga";

import FieldText from "@atlaskit/field-text";
import Modal from "@atlaskit/modal-dialog";
import Button from "@atlaskit/button";

class Verify extends Component {
  constructor(props){
      super(props)
      this.state = {
        airdropMetadata: {},
        formActions: [
          { text: "Dismiss", onClick: this.props.triggerModal },
        ],
        errorLog: []
      }
 }

 componentWillMount = async() => {
   if(window.screen.width < 800){
     await this.state.formActions.push({ text: "Scroll", onClick: this.scrollForm });
   }
 }

   scrollForm = (event) => {
     var currentState = document.getElementsByClassName("formBody")[0].style.transform;
     var newValue = parseInt(currentState.replace(/\D/g,''));
     if(currentState === "") newValue = -1 * 100;
     else if(newValue > 750) newValue = 0;
     else newValue = -1 * (newValue + 75);
     document.getElementsByClassName("formBody")[0].style.transform = `translateY(${newValue}px)`;
   }

  render() {
    if(this.props.triggerState){
      return(
          <Modal stackIndex="1" heading="Verify" appearance="warning" shouldCloseOnOverlayClick
            actions = {this.state.formActions}>
            <div className="formBody">
              <p>Verify your airdrop submission, by providing your email address that was used to reigster, your
              submission details will then forwarded to you for confirmation.</p>
              <br></br>
              <div className="emailInput">
                <div className="componentOne">
                  <FieldText required label="Email" name="email" shouldFitContainer="true"/>
                </div>
                <div className="componentTwo">
                  <Button appearance="primary">Verify!</Button>
                </div>
              </div>
              <br></br><br></br>
              <div className="submissionVerification">
                <p>
                  <FontAwesomeIcon icon={faTelegramPlane} color="#ffffff" size="2x"/>
                  <div className="formCheckbox"><Checkbox isChecked={this.state.telegram}/></div>
                </p>
                <br></br>
                <p>
                  <FontAwesomeIcon icon={faTwitter} color="#ffffff" size="2x"/>
                  <div className="formCheckbox"><Checkbox isChecked={this.state.twitter}/></div>
                </p>
                <br></br>
                <p>
                  <FontAwesomeIcon icon={faDiscord} color="#ffffff" size="2x"/>
                  <div className="formCheckbox"><Checkbox isChecked={this.state.discord}/></div>
                </p>
                <br></br>
                <p>
                  <FontAwesomeIcon icon={faWallet} color="#ffffff" size="2x"/>
                  <div className="formCheckbox"><Checkbox isChecked={this.state.wallet}/></div>
                </p>
              </div>
            </div>
         </Modal>
      )
    } else {
      return (
        <Fragment/>
      )
    }
  }
}

export default Verify;
