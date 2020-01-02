import React, { Fragment, Component } from "react";

import FieldText from "@atlaskit/field-text";
import Paper from '@material-ui/core/Paper';

import Confirmation from "../components/confirmation";
import Input from '../components/input';

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
    await this.initialiseFirebase();
  }

  initialiseFirebase = async() => {
    const state = await this.firebaseValidity();

    if(!state) {
     const firebaseDb = firebase.initializeApp(
      firebaseConfiguration("survey"), "Survey"
    ); this.setState({
      firebaseDb: firebaseDb.firestore()
     });
   } else {
     this.setState({
      firebaseDb: firebase.firestore()
     });
   }
  }

  firebaseValidity = async() => {
    var validity;
    await firebase.apps.forEach((value, index) => {
     if(value.name === "Survey") validity = true;
     else if(index === firebase.apps.length-1) validity = false;
   }); return validity
  }

  embedKey = (_event) => {
    if(_event.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
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


  render() {
    const { submitState, triggerSubmit } = this.props;

      if(submitState){
        return(
          <div className="navigationPage">
            <div className="verifiedTitle" color="#5aff9c">Application successful</div>
            <div className="confirmationState">
              <Confirmation />
            </div>
         </div>
       );
      } else {
        return(
          <div className="navigationPage">
            <Paper style={{ backgroundColor: "#906eff"}} className="formBody">
            <header className="formHeader">
              <h1> Validity Survey </h1>
              <h5>TO BE COMPLIANT FOR COMPENSATION, ONE MUST ANSWER ALL QUESTIONS.</h5>
              <h5>Earn VLDY tokens for providing expierences from investing in cryptoassets.</h5>
            </header>
            <Input triggerFunction={this.embedKey} name='email' label='What is your email?' />
            <Input triggerFunction={this.embedState} name='gender' label='What is your gender?' />
            <Input triggerFunction={this.embedState} name='age' label='What age are you?' />
            <Input triggerFunction={this.embedState} name='investment' label='Have you ever invested before entering crypto?' />
            <Input triggerFunction={this.embedState} name='beginning' label='How did you first hear about Bitcoin or other cryptocurrencies?' />
            <Input triggerFunction={this.embedState} name='analysis' label='How do you execute research upon finding an new investment opportunity?' />
            <Input triggerFunction={this.embedState} name='positive' label='What characteristics in your opinion determine if a project is good?' />
            <Input triggerFunction={this.embedState} name='negative' label='What characteristics in your opinion determine if a project is bad?' />

            <div className="formInput">
              <FieldText onChange={this.embedState} required isInvalid={this.state.revealOne} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionOne: value.target.value, revealOne: true }) : this.setState({ revealOne: false }); }} label="Have you been scammed by any cryptocurrency or blockchain related projects? (Yes/No)" shouldFitContainer="true" name="scammed"/>
            </div>
            {this.state.optionOne === "Yes" && (
              <div>
                <Input triggerFunction={this.embedState} name='stolen' label='How much monetary/fiat value did you lose on your investment?' />
                <Input triggerFunction={this.embedState} name='scam' label='What was the name of the project?' />
                <Input triggerFunction={this.embedState} name='stage' label='What stage was the project at the time of your investment?' />
                <Input triggerFunction={this.embedState} name='currency' label='In what currency was your investment?' />
                <Input triggerFunction={this.embedState} name='date' label='What date approximately was your investment and if possible please provide a transaction hash of your transfer.'/>
              </div>
            )}
            {this.state.optionOne === "No" && (
              <Input triggerFunction={this.embedState} name='acquaintance' label='Have you have heard of a friend or family member being scammed within the crypto-currency space?' />
            )}
            <div className="formInput">
              <FieldText onChange={this.embedState} required isInvalid={this.state.revealTwo} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionTwo: value.target.value, revealTwo: false }) : this.setState({ revealTwo: true }); }} label="Have you ever invested in any ICO’s (Initial Coin Offerings)? (Yes/No)" shouldFitContainer="true" name="crowdfunding"/>
            </div>
            {this.state.optionTwo === "Yes" && (
              <div>
                <Input triggerFunction={this.embedState} name='profit' label='Did you profit from your investment?' />
                <Input triggerFunction={this.embedState} name='ico' label='What was the name of the project?' />
                <Input triggerFunction={this.embedState} name='hype' label='Was there a lot of hype around the project?' />
              </div>
            )}
            {this.state.optionTwo === "No" && (
              <Input triggerFunction={this.embedState} name='connections' label='Do you know any friends or family members who have invested in ICO’s?' />
            )}
            <Input triggerFunction={this.embedState} name='ponzi' label='What is the most well-known cryptocurrency scam that has occured as to date in your own opinion?' />
            <div className="formInput">
              <FieldText onChange={this.embedState} required isInvalid={this.state.revealThree} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionThree: value.target.value, revealThree: false }) : this.setState({ revealThree: true }); }} label="Are there any active projects that you suspect of having fraudulent ethics? (Yes/No)" shouldFitContainer="true" name="suspicion"/>
            </div>
            {this.state.optionThree === "Yes" && (
              <Input triggerFunction={this.embedState} name='fraud' label='What is the name of the project?' />
            )}
            {this.state.optionThree === "No" && (
              <Input triggerFunction={this.embedState} name='investor' label='Are you an active investor in the search for new investments? (Yes/No)' />
            )}
            <Input triggerFunction={this.embedState} name='research' label='Do you think there is enough research conducted on the majority of cryptocurrency assets in the market today? (Yes/No)' />
            <Input triggerFunction={this.embedState} name='research' label='Would you think an evaluation platform for cryptocurrency assets would be beneficial for the average consumer? (Yes/No)' />
            <div className="formInput">
              <FieldText onChange={this.embedState} required isInvalid={this.state.revealSix} onChange={(value) => { value.target.value === "Yes" || value.target.value === "No" ? this.setState({ optionSix: value.target.value, revealSix: false }) : this.setState({ revealSix: true }); }} label="Would actively you use it? (Yes/No)" shouldFitContainer="true" name="usage"/>
            </div>
            {this.state.optionSix === "No" && (
              <Input triggerFunction={this.embedState} name='why' label='Why not?' />
            )}
          </Paper>
        </div>
      );
    }
  }
}

export default Survey;
