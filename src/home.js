import React, { Component } from 'react'
import firebase from 'firebase'

// UX

import { Icon , Segment } from 'semantic-ui-react'
import { Flag, AutoDismissFlag, FlagGroup } from '@atlaskit/flag'
import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
import { colors } from '@atlaskit/theme';
import { AtlaskitThemeProvider } from '@atlaskit/theme'
import FieldText from '@atlaskit/field-text'

import Modal from '@atlaskit/modal-dialog'
import Lorem from 'react-lorem-component';
import Button from '@atlaskit/button'
import Lozenge from '@atlaskit/lozenge'
import 'styled-components'
import '@atlaskit/css-reset'
import './css/home.css'
import './css/raleigh.css'

// Images

import vldy from './images/vldy.png'
import egem from './images/egem.png'
import bct from './images/bct.png'
import twitter from './images/twitter.png'
import discord from './images/discord.png'
import telegram from './images/telegram.png'
import facebook from './images/facebook.png'
import air from './images/VLDY-AIRDROP2.png'

import {
  Spotlight,
  SpotlightManager,
  SpotlightPulse,
  SpotlightTarget,
} from '@atlaskit/onboarding';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faParachuteBox, faEnvelope, faWallet } from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane, faDiscord, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import WarningIcon from '@atlaskit/icon/glyph/warning';

const airdrop = <FontAwesomeIcon icon={faParachuteBox} size='2x'/>
const settings = { timestampsInSnapshots: true};
firebase.initializeApp({
  apiKey: "AAIzaSyBE0ESLCNynHDQWOIda7zBiBut4KfvTieA",
  authDomain: "vldy-5bfae.firebaseapp.com",
  projectId: "vldy-5bfae" });
const db = firebase.firestore()
db.settings(settings);

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flags: []

    }

  }

componentWillMount() {

    this.open();


  }

  open = () => this.setState({ isOpen: true });
  close = () => this.setState({ isOpen: false });
  reveal = () => this.setState({ isApply: true });
  submit = () => this.setState({ isApply: false });
  accept = () => this.setState({ isSubmitted: false });
  formEmail = (event) => this.setState({ email: event.target.value });
  formTelegram = (event) => this.setState({ telegram: event.target.value });
  formDiscord = (event) => this.setState({ discord: event.target.value });
  formFacebook = (event) => this.setState({ facebook: event.target.value });
  formTwitter = (event) => this.setState({ twitter: event.target.value });
  formWallet = (event) => this.setState({ wallet: event.target.value });

  formData = () => {

    if(this.state.email != undefined && this.state.telegram != undefined && this.state.discord != undefined
        && this.state.twitter != undefined && this.state.facebook != undefined && this.state.wallet.length == 42)
        {

          var data = { telegram: this.state.telegram,
                       discord: this.state.discord,
                       twitter: this.state.twitter,
                       facebook: this.state.facebook,
                       wallet: this.state.wallet };

                       db.collection(this.state.email).add(data).then(() => {

                         this.submit();
                         this.setState({isSubmitted: true});


                       })


          }

}

  handleDismiss = () => {
  this.setState(prevState => ({
    flags: prevState.flags.slice(1),
  }));
};

addFlag = () => {
  const newFlagId = this.state.flags.length + 1;
  const flags = this.state.flags.slice();
  flags.splice(0, 0, newFlagId);

  this.setState({ flags });
};


  render() {
    const { active } = this.state;
    const { isOpen } = this.state;
    const { isApply } = this.state;
    const { isSubmitted } = this.state;

    return (

      <div className='homepage'>

      <AtlaskitThemeProvider mode='dark'>

          <img className='logo' src={vldy}/>
          <span className='title'>Validity</span>

        <a href='https://egem.io'><img className='egem' src={egem}/></a>
        <a href='https://twitter.com/ValidityCrypto'><img className='twitter' src={twitter}/></a>
        <a href='https://discord.gg/s5rSvB2'><img className='discord' src={discord}/></a>
        <a href='https://t.me/ValidityCrypto'><img className='telegram' src={telegram}/></a>
        <a href='https://www.facebook.com/ValidityCrypto'><img className='facebook' src={facebook}/></a>
        <a href='https://bitcointalk.org/index.php?topic=4900179'><img className='bct' src={bct}/></a>


        <FlagGroup>
                 {this.state.flags.map(flagId => {
                   return (
                     <AutoDismissFlag
                     actions={[
                          { content: 'Apply', onClick: () => { this.handleDismiss()
                                                               this.reveal() } },
                          { content: 'Ignore', onClick: this.handleDismiss },
                        ]}
                       appearance='success'
                       id={flagId}
                       key={flagId}
                       icon={airdrop}
                       title='VLDY Airdrop'
                       description='Register for second round of the Validity communal distribution scheme'
                     />
                   );
                 })}
      </FlagGroup>

      {isSubmitted && (
          <Modal
          actions = {[
            { text: 'Dismiss', onClick: this.accept }  ]}
          onClose={this.accept}
          appearance='warning'
          heading='Submission Successful'
          width='500px'>

          You are now registered for the VLDY airdrop round two.
          <br></br>
          <p className="warn"> For any queries or validating submissions contact airdrop@validity.ae </p>
          <br></br>
          Thank you for participating and have a nice day!

          </Modal> )}

      {isOpen && (
          <Modal
          actions = {[
            { text: 'Accept', onClick: () => { this.close()
                                               this.addFlag() } },
            { text: 'Refuse', onClick: this.close }, ]}
          onClose={this.close}
          appearance='warning'
          heading='GDPR'
          width='500px'>

          We use cookies and other tracking technologies to improve your browsing experience on our web site,
          to show you personalized content and targeted ads, to analyze our website traffic, and to understand
          where our visitors are coming from. By browsing our website, you consent to our use of cookies and
          other tracking technologies.

          </Modal> )}

          {isApply && (
              <Modal
              actions = {[
                { text: 'Submit', onClick: this.formData  },
                { text: 'Refuse', onClick: this.submit }, ]}
              heading='VLDY Airdrop Application'
              appearance='warning'

              >

              <div className="sect">

              <img className="mdl"src={air} />
              <br></br>
              <br></br>
              <div className="inpt">
                <b><i>
                <p className="warn">DISCLAIMER: ALL PARAMETERS MUST BE CORRECT TO BE COMPLIANT OF THE
                AIRDROP DISTRIBUTION.</p>
                <p className="warn">ANY INCORRECT INFORMATION WILL BE FOLLOWED UP
                AND IF NO SWIFT REPSONSE FROM THE APPLICANT THEY WILL BE EXCLUDED.</p></i></b>
                <br></br>
                <br></br>
                <br></br>
                <b>Your e-mail address</b>
                <FieldText shouldFitContainer='true' label='E-Mail' required onChange={this.formEmail}/>
                <FontAwesomeIcon className="ia" icon={faEnvelope} size='2x'/>
                <br></br>
                <br></br>
                <b>Your Telegram account present in <a href="https://t.me/ValidityCrypto">@ValidityCrypto</a></b>
                <FieldText shouldFitContainer='true' label='Telegram Username' required onChange={this.formTelegram}/>
                <FontAwesomeIcon className="ia" icon={faTelegramPlane} size='2x'/>
                <br></br>
                <br></br>
                <b>Your account present in the <a href="https://discord.gg/s5rSvB2">Validity Discord</a></b>
                <FieldText shouldFitContainer='true' label='Discord Username' required onChange={this.formDiscord}/>
                <FontAwesomeIcon className="ia" icon={faDiscord} size='2x'/>
                <br></br>
                <br></br>
                <b>Your Twitter account that is following <a href="https://twitter.com/ValidityCrypto">@ValidityCrypto</a></b>
                <FieldText shouldFitContainer='true' label='Twitter Username' required onChange={this.formTwitter}/>
                <FontAwesomeIcon className="ia" icon={faTwitter} size='2x'/>
                <br></br>
                <br></br>
                <b>Your facebook account that has liked <a href="https://www.facebook.com/ValidityCrypto/">Validity's facebook</a></b>
                <FieldText shouldFitContainer='true' label='Facebook Username' required onChange={this.formFacebook}/>
                <FontAwesomeIcon className="ia" icon={faFacebook} size='2x'/>
                <br></br>
                <br></br>
                <b>Target <a href="https://www.myegemwallet.com">EtherGem wallet address</a> for the airdrop distribution</b>
                <FieldText shouldFitContainer='true' label='EtherGem Address' required onChange={this.formWallet}/>
                <FontAwesomeIcon className="ia" icon={faWallet} size='2x'/>

                </div>    

              </div>

              </Modal> )}

              </AtlaskitThemeProvider>

      </div>

    );
  }
}

export default Home
