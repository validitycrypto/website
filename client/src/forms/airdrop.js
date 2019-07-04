import React, { Fragment, Component } from "react";

import { faEnvelope, faStarHalfAlt, faLayerGroup, faWallet, faHome, faFileSignature, faParachuteBox } from"@fortawesome/free-solid-svg-icons"
import { faTelegramPlane, faDiscord, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import FieldText from "@atlaskit/field-text";
import Modal from "@atlaskit/modal-dialog"

class Airdrop extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
 }

  render() {
    if(this.props.triggerState){
      return(
          <Modal className="modalForm" heading="VLDY Airdrop Application" appearance="warning" scrollBehaviour="outside"
            actions = {[
              { text: "Submit", onClick: () => this.props.triggerSubmit },
              { text: "Refuse", onClick: this.props.triggerModal }
            ]}>
              <div className="formHead">
                <p className="formHighlight">AIRDROP TIER: 1; AIRDROP ROUND: 3</p>
                <p className="formHighlight">DISCLAIMER: ALL PARAMETERS MUST BE CORRECT TO BE COMPLIANT OF THE AIRDROP DISTRIBUTION.</p>
                <p className="formHighlight">ANY INCORRECT INFORMATION WILL BE FOLLOWED UP AND IF NO SWIFT REPSONSE FROM THE APPLICANT THEY WILL BE EXCLUDED.</p>
              </div>
              <div className="formBody">
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="E-Mail" required onChange={this.formEmail}/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faEnvelope} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your e-mail address
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Telegram Username" required onChange={this.formTelegram}/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faTelegramPlane} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your Telegram account present in <a href="https://t.me/ValidityCrypto">@ValidityCrypto</a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Discord Username" required onChange={this.formDiscord}/>
                  <div className="formLabel" ref={r => {this.bottomRef = r;}}>
                    <FontAwesomeIcon  icon={faDiscord} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your account present in the Validity <a href="https://discord.gg/s5rSvB2">Discord</a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Twitter Username" required onChange={this.formTwitter}/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faTwitter} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your Twitter account that is following <a href="https://twitter.com/ValidityCrypto">@ValidityCrypto</a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Facebook Username" required onChange={this.formFacebook}/>
                  <div className="formLabel">
                    <FontAwesomeIcon  icon={faFacebook} color="#ffffff" size="lg"/>&nbsp;&nbsp;&nbsp;Your facebook account that has liked Validity's <a href="https://www.facebook.com/ValidityCrypto/">Facebook</a>
                  </div>
                </div>
                <div className="formInput">
                  <FieldText shouldFitContainer="true" label="Ethereum Address" required onChange={this.formWallet}/>
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
