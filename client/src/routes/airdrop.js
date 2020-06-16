import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import { AIRDROP_WALLET, AIRDROP_TWITTER, AIRDROP_FACEBOOK, AIRDROP_TELEGRAM, AIRDROP_DISCORD } from '../assets/constants/forms';
import { PURPLE_SECONDARY, GREEN_SECONDARY } from '../assets/constants/palette';

import { faTelegramPlane, faDiscord, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleLeft, faEnvelope, faWallet } from'@fortawesome/free-solid-svg-icons'
import { firebaseConfiguration } from '../utils/firebaseConfig'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import firebase from 'firebase'
import ReactGA from 'react-ga';

import Confirmation from '../assets/components/confirmation';
import Input from '../assets/components/input';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@atlaskit/button";
import Page from "@atlaskit/page"

const airdropParameters = [
  'discord',
  'facebook',
  'twitter',
  'wallet'
];

class Airdrop extends Component {
  constructor(props){
      super(props)
      this.state = {
        airdropMetadata: {},
        errorLog: []
      }
 }

 componentDidMount = async() => {
   await this.initialiseFirebase()
 }

 initialiseFirebase = async() => {
    const firebaseDb = firebase.initializeApp(
     firebaseConfiguration('airdrop'), 'Airdrop'
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
     var targetComponent = document.getElementsByName('email')[0];
     targetComponent.parentElement.style.setProperty('border-color', 'rgba(191, 191, 191, 1)', 'important');

     await this.errorConditioning(false);
     if(!this.state.airdropMetadata[this.state.email]){
       targetComponent.parentElement.style.setProperty("border-color", "rgba(255, 171, 0, 0.5)", "important")
     } else if(await this.validateSubmission()){
       var inputData = Object.entries(this.state.airdropMetadata);
       await this.state.firebaseDb.collection(inputData[0][0])
       .add(inputData[0][1]).then((docRef) => {
         console.log('Document written: ', docRef.id);
        this.props.triggerSubmit('airdrop');
       }).catch((error) =>{
         console.error('Error adding document: ', error);
       }); ReactGA.event({
        category: 'Navigation',
        action: 'Airdrop',
        label: 'Submit'
      })} else await this.errorConditioning(true)
  }

    errorConditioning = async(_bool) => {
      var backgroundState = _bool ? 'rgba(255, 171, 0, 0.5)' : 'rgba(191, 191, 191, 1)';
      await this.state.errorLog.forEach((_value) => {
          var targetComponent = document.getElementsByName(_value)[0];
          targetComponent.parentElement.style.setProperty("border-color", backgroundState, "important");
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
                  <h1> Validity Airdrop</h1>
                  <h3> Tier 1 Round 3</h3>
                  <h5> DISCLAIMER: ALL PARAMETERS MUST BE CORRECT TO BE COMPLIANT OF THE AIRDROP DISTRIBUTION. ANY INCORRECT INFORMATION WILL BE FOLLOWED UP AND IF NO SWIFT REPSONSE FROM THE APPLICANT THEY WILL BE EXCLUDED.</h5>
                </header>
                <Input textComponent='Your email address' type='text' triggerFunction={this.embedKey} icon={faEnvelope} name='email' label='Email Address' />
                <div className="formInput">
                  <div className="formLabel">
                    <FontAwesomeIcon icon={faTelegramPlane} color="#8e8e8e" size="lg"/>&nbsp;&nbsp;&nbsp;Message <a target="_blank" href="https://t.me/ValidityBot"><b>@ValidityBot</b></a> on Telegram using the /airdrop command and provide the email used for your submission.
                  </div>
                </div>
                <Input textComponent={AIRDROP_DISCORD} type='text' triggerFunction={this.embedState} icon={faDiscord} name='discord' label='Discord Username' />
                <Input textComponent={AIRDROP_TWITTER} type='text' triggerFunction={this.embedState} icon={faTwitter} name='twitter' label='Twitter Username' />
                <Input textComponent={AIRDROP_FACEBOOK} type='number' triggerFunction={this.embedState} icon={faFacebook} name='facebook' label='Facebook Profile ID' />
                <Input textComponent={AIRDROP_WALLET} type='text' triggerFunction={this.embedState} icon={faWallet} name='wallet' label='Ethereum Address' />
                <Button className="formButton" appearance='help' onClick={this.submitApplication}> Submit </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default Airdrop;
