import React, { Fragment, Component } from "react";

import FieldText from "@atlaskit/field-text";
import Modal from "@atlaskit/modal-dialog"

class Survey extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
  }

  render() {
    if(this.props.triggerState){
      return(
        <Modal actions = {[{ text: "Dismiss", onClick: this.props.triggerModal }]} appearance="danger" heading="Validity Fraudelent Survey">
        <div className="formHead">
          <p className="formHighlight">TO BE COMPLIANT FOR COMPENSATION, ONE MUST ANSWER ALL QUESTIONS.</p>
          <p className="formHighlight">Earn some VLDY tokens or sharing some general statisistics about any amoral activities you have expierenced, to help us create a greater picture of the widespread problem at hand.</p>
        </div>
        <div className="formBody">
          <div className="formInput">
            <FieldText label="What is your gender?" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText label="What age are you?" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText label="Have you ever invested before entering crypto?" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText label="How did you first hear about Bitcoin or other cryptocurrencies?" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText label="How do you execute due diligence upon following on up on an new investment?" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText label="What characteristics in your opinion determine if a project is good?" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText label="What characteristics in your opinion determine if a project is bad?" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
          <FieldText isInvalid={this.state.revealOne} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionOne: value.target.value, revealOne: true }) : this.setState({ revealOne: false }); }} label="Have you been scammed by any cryptocurrency or blockchain related projects? (Yes/No)" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          {this.state.optionOne === "Yes" && (
            <div>
            <div className="formInput">
              <FieldText label="How much monetary/fiat value did you lose on your investment?" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText label="What was the name of the project?" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText label="What stage was the project at the time of your investment? (Pre-sale, ICO, IEO, Market listing)" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText label="In what currency was your investment?" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText label="What date approximately was your investment and if possible please provide a transaction hash of your transfer." shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
            </div>
          )}
          {this.state.optionOne === "No" && (
            <div className="formInput">
              <FieldText label="Have you have heard of a friend or family member being scammed within the crypto-currency space?" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
          )}
          <div className="formInput">
            <FieldText isInvalid={this.state.revealTwo} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionTwo: value.target.value, revealTwo: false }) : this.setState({ revealTwo: true }); }} label="Have you ever invested in any ICO’s (Initial Coin Offerings)? (Yes/No)" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          {this.state.optionTwo === "Yes" && (
            <div>
            <div className="formInput">
              <FieldText label="Did you profit from your investment?" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText label="What was the name of the project?" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText label="Was there a lot of hype around the project?" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
            </div>
          )}
          {this.state.optionTwo === "No" && (
            <div className="formInput">
              <FieldText label="Do you know any friends or family members who have invested in ICO’s (Initial Coin Offerings)?" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
          )}
          <div className="formInput">
            <FieldText label="What is the most well-known cryptocurrency scam that has occured as to date in your own opinion?" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText isInvalid={this.state.revealThree} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionThree: value.target.value, revealThree: false }) : this.setState({ revealThree: true }); }} label="Are there any active projects that you suspect of having fraudulent ethics? (Yes/No)" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          {this.state.optionThree === "Yes" && (
            <div className="formInput">
              <FieldText label="What is the name of the project?" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
          )}
          {this.state.optionThree === "No" && (
            <div className="formInput">
              <FieldText label="Are you an active investor in the search for new investments? (Yes/No)" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
          )}
          <div className="formInput">
            <FieldText isInvalid={this.state.revealFour} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ revealFour: false }) : this.setState({ revealFour: true }); }} label="Do you think there is enough research conducted on the majority of cryptocurrency assets in the market today? (Yes/No)" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText isInvalid={this.state.revealFive} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ revealFive: false }) : this.setState({ revealFive: true }); }} label="Would you think an evaluation platform for cryptocurrency assets would be beneficial for the average consumer? (Yes/No)" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText isInvalid={this.state.revealSix} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionSix: value.target.value, revealSix: false }) : this.setState({ revealSix: true }); }} label="Would actively you use it? (Yes/No)" shouldFitContainer="true"/>
            <div className="formLabel">
            </div>
          </div>
          {this.state.optionSix === "No" && (
            <div className="formInput">
              <FieldText label="Why not?" shouldFitContainer="true"/>
              <div className="formLabel">
              </div>
            </div>
          )}
        </div>
        </Modal>
      );
    }
    return(
      <Fragment/>
    )
  }
}

export default Survey;
