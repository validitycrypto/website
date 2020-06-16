import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import { faAngleDoubleLeft } from'@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import FieldText from '@atlaskit/field-text';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@atlaskit/button";

import Confirmation from '../assets/components/confirmation';
import Option from '../assets/components/option';
import Input from '../assets/components/input';

import { SURVEY_OPTIONS, GENDER_OPTIONS, PROJECT_OPTIONS, CALENDER_OPTIONS, CURRENCY_OPTIONS } from '../assets/constants/forms';
import { PURPLE_SECONDARY, GREEN_SECONDARY } from '../assets/constants/palette';

import { firebaseConfiguration } from '../utils/firebaseConfig'
import firebase from 'firebase'
import ReactGA from 'react-ga';

const surveyParameters = [
  'gender',
  'age',
  'investment',
  'beginning',
  'analysis',
  'favourite',
  'positive',
  'negative',
  'optionOne',
  'optionTwo',
  'ponzi',
  'optionThree',
  'investor',
  'evaluation',
  'research'
];

class Survey extends Component {
  constructor(props){
      super(props)
      this.state = {
        surveyMetadata: {},
        errorLog: []
      }
  }

  componentDidMount = async() => {
    await this.initialiseFirebase();
  }

  initialiseFirebase = async() => {
    const state = await this.firebaseValidity();

    if(!state) {
     const firebaseDb = firebase.initializeApp(
      firebaseConfiguration('survey'), 'Survey'
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
     if(value.name === 'Survey') validity = true;
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

  embedOption = (_event, _metadata) => {
    this.state.surveyMetadata[this.state.email][_metadata.name] = _event.value;
    this.setState({ [_metadata.name]: _event.value });
  }

  submitApplication = async() => {
    var targetComponent = document.getElementsByName('email')[0];
    targetComponent.parentElement.style.setProperty("border-color", "rgba(191, 191, 191, 1)", "important")

    await this.errorConditioning(false);

    if(!this.state.surveyMetadata[this.state.email]){
      targetComponent.parentElement.style.setProperty("border-color", "rgba(255, 171, 0, 0.5)", "important")
    } else if(await this.validateSubmission()){
      var inputData = Object.entries(this.state.surveyMetadata);
      await this.state.firebaseDb.collection(inputData[0][0])
      .add(inputData[0][1]).then((docRef) => {
        console.log('Document written: ', docRef.id);
        this.props.triggerSubmit('survey');
      }).catch((error) =>{
        console.error('Error adding document: ', error);
      }); ReactGA.event({
       category: 'Navigation',
       action: 'Survey',
       label: 'Submit'
     });
   } else await this.errorConditioning(true)
 }

  validateSubmission = async() => {
   await this.setState({ errorLog: [] })

   if(!this.state.surveyMetadata[this.state.email]) return false

   await surveyParameters.forEach((_value) => {
      if(this.state.surveyMetadata[this.state.email][_value] == undefined){
        this.state.errorLog.push(_value);
      }
   }); if(this.state.errorLog.length === 0) return true;
   else return false;
 }

  errorConditioning = async(_bool) => {
    var backgroundState = _bool ? 'rgba(255, 171, 0, 0.5)' : 'rgba(191, 191, 191, 1)';
    await this.state.errorLog.forEach((_value) => {
        var targetComponent = document.getElementsByName(_value)[0];
        if(_value == 'optionOne' || _value == 'optionTwo' || _value == 'optionThree'
          || _value == 'investor' || _value == 'evaluation' || _value == 'research'
          || _value == 'gender' || _value == 'investment' || _value == 'currency'
          || _value == 'date' ) {
          targetComponent.parentElement.firstChild.style.setProperty("border-color", backgroundState, "important")
        } else {
          targetComponent.parentElement.style.setProperty("border-color", backgroundState, "important");
        }
    });
  }

  render() {
    const { submitState, triggerSubmit } = this.props;

      if(submitState){
        return(
          <div className='navigationPage'>
            <div className='navigationButton'>
              <Link to='/'>
              <FontAwesomeIcon size='x2' icon={faAngleDoubleLeft} />
              </Link>
            </div>
            <div className='confirmationState'>
              <Confirmation />
              <h1>Application successful</h1>
            </div>
         </div>
       );
      } else {
        return(
          <div className='navigationPage'>
            <div className='navigationButton'>
              <Link to='/'>
                <FontAwesomeIcon size='x2' icon={faAngleDoubleLeft} />
              </Link>
            </div>
            <Grid container direction="column" justify='stretch'>
              <Grid item>
                <Paper style={{ backgroundColor: 'white' }} className='formBody'>
                  <header className='formHeader'>
                    <h1> Validity Survey </h1>
                    <h3> Investment expierences regarding crypto assets</h3>
                    <h5>DISCLAIMER: TO BE COMPLIANT FOR COMPENSATION, ONE MUST ANSWER ALL QUESTIONS. INDIVIDUALS ARE REWARDED <b>25,000 VLDY</b> FOR SUCCESSFUL SUBMISSIONS.   </h5>
                  </header>
                  <Input triggerFunction={this.embedKey} name='email' label='What is your email?' />
                  <Option name='gender' label='What is your gender?' options={GENDER_OPTIONS} onChange={this.embedOption} />
                  <Input type='number' triggerFunction={this.embedState} name='age' label='What age are you?' />
                  <Option name='investment' label='Have you ever invested in other commodities before crypto?' options={SURVEY_OPTIONS} onChange={this.embedOption} />
                  <Input triggerFunction={this.embedState} name='beginning' label='How did you first hear about Bitcoin or other cryptocurrencies?' />
                  <Input triggerFunction={this.embedState} name='analysis' label='How do you do research upon finding an new potential investment?' />
                  <Input triggerFunction={this.embedState} name='favourite' label='What cryptocurrency or blockchain project has your interest right now?' />
                  <Input triggerFunction={this.embedState} name='positive' label='What characteristics in your opinion determine if a project is good?' />
                  <Input triggerFunction={this.embedState} name='negative' label='What characteristics in your opinion determine if a project is bad?' />
                  <Option name='optionOne' label='Have you ever been scammed by any cryptocurrency or blockchain projects?' options={SURVEY_OPTIONS} onChange={this.embedOption} />

                  {this.state.optionOne === true && (
                  <div>
                    <Input triggerFunction={this.embedState} name='scam' label='What was the name of the project?' />
                    <Input triggerFunction={this.embedState} type='number' name='stolen' label='How much USD value did you lose?' />
                    <Option name='stage' label='What stage was the project at the time of your investment?' options={PROJECT_OPTIONS} onChange={this.embedOption} />
                    <Option name='currency' label='In what currency was your investment?' options={CURRENCY_OPTIONS} onChange={this.embedOption} />
                    <Option name='date' label='In what calender year did this happen?' options={CALENDER_OPTIONS} onChange={this.embedOption} />
                  </div>
                  )}
                  {this.state.optionOne === false && (
                    <Option name='acquaintance' label='Have you have heard of a friend or family member being scammed within the crypto-currency space?' options={SURVEY_OPTIONS} onChange={this.embedOption} />
                  )}

                  <Option name='optionTwo' label='Have you ever invested in any ICO’s (Initial Coin Offerings)?' options={SURVEY_OPTIONS} onChange={this.embedOption} />

                  {this.state.optionTwo === true && (
                  <div>
                    <Input triggerFunction={this.embedState} name='ico' label='What was the name of the project?' />
                    <Option name='profit' label='Did you profit from your investment?' options={SURVEY_OPTIONS} onChange={this.embedOption} />
                    <Option name='hype' label='Was there a lot of hype around the project??' options={SURVEY_OPTIONS} onChange={this.embedOption} />
                  </div>
                  )}
                  {this.state.optionTwo === false && (
                    <Option name='connections' label='Do you know any friends or family members who have invested in ICO’s?' options={SURVEY_OPTIONS} onChange={this.embedOption} />
                  )}

                  <Input triggerFunction={this.embedState} name='ponzi' label='What is the most well-known cryptocurrency scam that has occured to date in your own opinion?' />
                  <Option name='optionThree' label='Is there any active project that you currently suspect of being a fraud?' options={SURVEY_OPTIONS} onChange={this.embedOption} />

                  {this.state.optionThree === true && (
                    <Input triggerFunction={this.embedState} name='fraud' label='What is the name of the project?' />
                  )}

                  <Option name='investor' label='Are you an active individual in the search for new investments?' options={SURVEY_OPTIONS} onChange={this.embedOption} />
                  <Option name='evaluation' label='Do you think there is enough research analysing the majority of projects in the market today?' options={SURVEY_OPTIONS} onChange={this.embedOption} />
                  <Option name='research' label='Would you think an rating system for crypto assets would be beneficial to the general investor?' options={SURVEY_OPTIONS} onChange={this.embedOption} />
                  <Button className="formButton" appearance='help' onClick={this.submitApplication}> Submit </Button>
                </Paper>
              </Grid>
            </Grid>
        </div>
      );
    }
  }
}

export default Survey;
