import React, { Fragment, Component } from "react";

import FieldText from "@atlaskit/field-text";
import Modal from "@atlaskit/modal-dialog"
import { firebaseConfiguration } from "../utils/firebaseConfig"
import firebase from "firebase"
import ReactGA from "react-ga";

class Survey extends Component {
  constructor(props){
      super(props)
      this.state = {
        surveyMetadata: {},
        formActions: [
          { text: "Submit", onClick: this.submitApplication },
          { text: "Refuse", onClick: this.props.triggerModal },
        ]
      }
  }

  componentWillMount = async() => {
    const firebaseDb = firebase.initializeApp(firebaseConfiguration("survey"), "Survey")
    this.setState({ firebaseDb: firebaseDb.firestore() });
    if(window.screen.width < 800){
      await this.state.formActions.push({ text: "Scroll", onClick: this.scrollForm });
    }
  }

  embedKey = (_event) => {
    if(_event.target.value.match("@") !== null && _event.target.value.match(".") !== null ){
      this.state.surveyMetadata[_event.target.value] = {}
      this.setState({ email: _event.target.value });
    }
  }

  embedState = (_event) => {
    this.state.surveyMetadata[this.state.email][_event.target.name] = _event.target.value
  }

  submitApplication = async() => {
    var targetComponent = document.getElementsByName("email")[0];
    targetComponent.style.background = "";
    targetComponent.style.border = "";
    if(!this.state.surveyMetadata[this.state.email]){
      targetComponent.style.background = "rgba(255, 171, 0, 0.5)";
      targetComponent.style.border = "5px solid rgba(255, 171, 0, 0.25)";
    } else {
      var inputData = Object.entries(this.state.surveyMetadata);
      await this.state.firebaseDb.collection(inputData[0][0])
      .add(inputData[0][1]).then((docRef) => {
        console.log("Document written: ", docRef.id);
        this.props.triggerModal();
        this.props.triggerSubmit();
      }).catch((error) =>{
        console.error("Error adding document: ", error);
      }); ReactGA.event({
       category: 'Navigation',
       action: 'Survey',
       label: 'Submit'
     });
    }
  }

  refuseApplication = async() => {
     await this.props.triggerModal();
     ReactGA.event({
       category: 'Navigation',
      action: 'Survey',
      label: 'Refuse'
    });
  }

  scrollForm = (event) => {
    var currentState = document.getElementsByClassName("formBody")[0].style.transform;
    var newValue = parseInt(currentState.replace(/\D/g,''));
    if(currentState === "") newValue = -1 * 100;
    else if(newValue > 1750) newValue = 0;
    else newValue = -1 * (newValue + 150);
    document.getElementsByClassName("formBody")[0].style.transform = `translateY(${newValue}px)`;
  }

  render() {

    if(this.props.triggerState){
      return(
        <Modal stackIndex="1" appearance="warning" heading="Validity Fraudelent Survey" shouldCloseOnOverlayClick
        actions={this.state.formActions}>
        <div className="formBody">
          <p className="formHighlight">TO BE COMPLIANT FOR COMPENSATION, ONE MUST ANSWER ALL QUESTIONS.</p>
          <p className="formHighlight">Earn some VLDY tokens for sharing some general statisistics about any amoral activities you have expierenced, to help us create a greater picture of the widespread problem at hand.</p>
        <div className="formInput">
            <FieldText onChange={this.embedKey} required label="What is your email?" shouldFitContainer="true" name="email"/>
              <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText onChange={this.embedState} required label="What is your gender?" shouldFitContainer="true" name="gender"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText onChange={this.embedState} required label="What age are you?" shouldFitContainer="true" name="age"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText onChange={this.embedState} required label="Have you ever invested before entering crypto?" shouldFitContainer="true" name="investment"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText onChange={this.embedState} required label="How did you first hear about Bitcoin or other cryptocurrencies?" shouldFitContainer="true" name="beginning"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText onChange={this.embedState} required label="How do you execute due diligence upon following on up on an new investment?" shouldFitContainer="true" name="analysis"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText onChange={this.embedState} required label="What characteristics in your opinion determine if a project is good?" shouldFitContainer="true" name="positive"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText onChange={this.embedState} required label="What characteristics in your opinion determine if a project is bad?" shouldFitContainer="true" name="negative"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
          <FieldText onChange={this.embedState} required isInvalid={this.state.revealOne} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionOne: value.target.value, revealOne: true }) : this.setState({ revealOne: false }); }} label="Have you been scammed by any cryptocurrency or blockchain related projects? (Yes/No)" shouldFitContainer="true" name="scammed"/>
            <div className="formLabel">
            </div>
          </div>
          {this.state.optionOne === "Yes" && (
            <div>
            <div className="formInput">
              <FieldText onChange={this.embedState} required label="How much monetary/fiat value did you lose on your investment?" shouldFitContainer="true" name="stolen"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText onChange={this.embedState} label="What was the name of the project?" shouldFitContainer="true" name="scam"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText onChange={this.embedState} required label="What stage was the project at the time of your investment? (Pre-sale, ICO, IEO, Market listing)" shouldFitContainer="true" name="stage"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText onChange={this.embedState} required label="In what currency was your investment?" shouldFitContainer="true" name="currency"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText onChange={this.embedState} required label="What date approximately was your investment and if possible please provide a transaction hash of your transfer." shouldFitContainer="true" name="date"/>
              <div className="formLabel">
              </div>
            </div>
            </div>
          )}
          {this.state.optionOne === "No" && (
            <div className="formInput">
              <FieldText onChange={this.embedState} required label="Have you have heard of a friend or family member being scammed within the crypto-currency space?" shouldFitContainer="true" name="acquaintance"/>
              <div className="formLabel">
              </div>
            </div>
          )}
          <div className="formInput">
            <FieldText onChange={this.embedState} required isInvalid={this.state.revealTwo} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionTwo: value.target.value, revealTwo: false }) : this.setState({ revealTwo: true }); }} label="Have you ever invested in any ICO’s (Initial Coin Offerings)? (Yes/No)" shouldFitContainer="true" name="crowdfunding"/>
            <div className="formLabel">
            </div>
          </div>
          {this.state.optionTwo === "Yes" && (
            <div>
            <div className="formInput">
              <FieldText onChange={this.embedState} required label="Did you profit from your investment?" shouldFitContainer="true" name="profit"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText onChange={this.embedState} required label="What was the name of the project?" shouldFitContainer="true" name="ico"/>
              <div className="formLabel">
              </div>
            </div>
            <div className="formInput">
              <FieldText onChange={this.embedState} required label="Was there a lot of hype around the project?" shouldFitContainer="true" name="hype"/>
              <div className="formLabel">
              </div>
            </div>
            </div>
          )}
          {this.state.optionTwo === "No" && (
            <div className="formInput">
              <FieldText onChange={this.embedState} required label="Do you know any friends or family members who have invested in ICO’s (Initial Coin Offerings)?" shouldFitContainer="true" name="connections"/>
              <div className="formLabel">
              </div>
            </div>
          )}
          <div className="formInput">
            <FieldText onChange={this.embedState} required label="What is the most well-known cryptocurrency scam that has occured as to date in your own opinion?" shouldFitContainer="true" name="ponzi"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText onChange={this.embedState} required isInvalid={this.state.revealThree} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionThree: value.target.value, revealThree: false }) : this.setState({ revealThree: true }); }} label="Are there any active projects that you suspect of having fraudulent ethics? (Yes/No)" shouldFitContainer="true" name="suspicion"/>
            <div className="formLabel">
            </div>
          </div>
          {this.state.optionThree === "Yes" && (
            <div className="formInput">
              <FieldText onChange={this.embedState} required label="What is the name of the project?" shouldFitContainer="true" name="fraud"/>
              <div className="formLabel">
              </div>
            </div>
          )}
          {this.state.optionThree === "No" && (
            <div className="formInput">
              <FieldText onChange={this.embedState} required label="Are you an active investor in the search for new investments? (Yes/No)" shouldFitContainer="true" name="investor"/>
              <div className="formLabel">
              </div>
            </div>
          )}
          <div className="formInput">
            <FieldText onChange={this.embedState} required isInvalid={this.state.revealFour} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ revealFour: false }) : this.setState({ revealFour: true }); }} label="Do you think there is enough research conducted on the majority of cryptocurrency assets in the market today? (Yes/No)" shouldFitContainer="true" name="research"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText onChange={this.embedState} required isInvalid={this.state.revealFive} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ revealFive: false }) : this.setState({ revealFive: true }); }} label="Would you think an evaluation platform for cryptocurrency assets would be beneficial for the average consumer? (Yes/No)" shouldFitContainer="true" name="beneficial"/>
            <div className="formLabel">
            </div>
          </div>
          <div className="formInput">
            <FieldText onChange={this.embedState} required isInvalid={this.state.revealSix} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionSix: value.target.value, revealSix: false }) : this.setState({ revealSix: true }); }} label="Would actively you use it? (Yes/No)" shouldFitContainer="true" name="usage"/>
            <div className="formLabel">
            </div>
          </div>
          {this.state.optionSix === "No" && (
            <div className="formInput">
              <FieldText onChange={this.embedState} label="Why not?" shouldFitContainer="true" name="why"/>
              <div className="formLabel">
              </div>
            </div>
          )}
          </div>
        </Modal>
      );
    } else if(this.props.submitState){
      return(
        <Modal actions = {[{ text: "Dismiss", onClick: this.props.triggerSubmit }]} appearance="warning" heading="Submission Successful" width="500px">
          You are now registered for the fraudulent survey. For any queries or validating submissions contact:
          <br></br><br></br>
          <a><b>team@vldy.org</b></a>
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

export default Survey;
