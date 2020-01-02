import React, { Fragment, Component } from "react";

import { PURPLE_SECONDARY, GREEN_SECONDARY } from '../constants/palette';

import { faEnvelope, faStarHalfAlt, faLayerGroup, faWallet, faHome, faFileSignature, faParachuteBox } from"@fortawesome/free-solid-svg-icons"
import { faTelegramPlane, faDiscord, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { firebaseConfiguration } from "../utils/firebaseConfig"
import { Checkbox } from '@atlaskit/checkbox';
import firebase from "firebase"
import ReactGA from "react-ga";

import Paper from '@material-ui/core/Paper';
import FieldText from "@atlaskit/field-text";
import Grid from '@material-ui/core/Grid';
import Button from "@atlaskit/button";

const initialState = { discord: false, telegram: false, wallet: false, twitter: false, facebook: false }

class Verify extends Component {
  constructor(props){
      super(props)
      this.state = {
        airdropMetadata: {},
        errorLog: []
      }
 }

 componentWillMount = async() => {
   await this.initialiseFirebase();
 }

   initialiseFirebase = async() => {
     const state = await this.firebaseValidity();

     if(!state){
      const firebaseDb = firebase.initializeApp(
        firebaseConfiguration("airdrop"), "Airdrop"
      ); this.setState({
      firebaseDb: firebaseDb.firestore()
     });
    } else {
      this.setState({
        firebaseDb: firebase.apps[state].firestore()
      });
    }
   }

   firebaseValidity = async() => {
     var validity;
     await firebase.apps.forEach((value, index) => {
      if(value.name === "Airdrop") validity = index;
      else if(index === firebase.apps.length-1) validity = false;
    }); return validity
   }

   verifySubmission = async() => {
     this.setState({ ...initialState });
     this.state.firebaseDb.collection(this.state.email)
     .limit(1).get().then((result) => {
       result.forEach(item => {
          Object.entries(item.data())
            .map((key) => {
                this.setState({
                  [key[0]]: true
                })
            })
       })
     })
   }

   recordEmail = async(event) => {
     this.setState({
       email: event.target.value
    });
   }

  render() {
      return(
        <div className='navigationPage'>
          <Paper style={{ backgroundColor: PURPLE_SECONDARY }} className='formBody'>
            <header div className='formHeader'>
              <h1> AIRDROP TIER 1, ROUND 3</h1>
              <h5>Verify your airdrop submission, by providing your email address that was used to reigster.</h5>
            </header>
              <Grid container direction="row" alignItems='center' justify="space-between">
                  <Grid item>
                    <FontAwesomeIcon icon={faTelegramPlane} color="#ffffff" size="2x"/>
                    <div className="formCheckbox"><Checkbox isChecked={this.state.telegram}/></div>
                  </Grid>
                  <Grid item>
                    <FontAwesomeIcon icon={faTwitter} color="#ffffff" size="2x"/>
                    <div className="formCheckbox"><Checkbox isChecked={this.state.twitter}/></div>
                  </Grid>
                  <Grid item>
                    <FontAwesomeIcon icon={faDiscord} color="#ffffff" size="2x"/>
                    <div className="formCheckbox"><Checkbox isChecked={this.state.discord}/></div>
                  </Grid>
                  <Grid item>
                    <FontAwesomeIcon icon={faFacebook} color="#ffffff" size="2x"/>
                    <div className="formCheckbox"><Checkbox isChecked={this.state.facebook}/></div>
                  </Grid>
                  <Grid item>
                    <FontAwesomeIcon icon={faWallet} color="#ffffff" size="2x"/>
                    <div className="formCheckbox"><Checkbox isChecked={this.state.wallet}/></div>
                  </Grid>
                </Grid>
              <div className="emailInput">
                <div className="componentOne">
                  <FieldText onChange={this.recordEmail} required placeholder="user@gmail.com" label="Email" name="email" shouldFitContainer="true"/>
                </div>
                <div className="componentTwo">
                  <Button onClick={this.verifySubmission} appearance="primary">Verify!</Button>
                </div>
              </div>
          </Paper>
         </div>
      );
    }
}

export default Verify;
