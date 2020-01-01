import React, { Fragment, Component } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page"

import Paper from "@material-ui/core/Paper"
import ReactGA from "react-ga";

import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import { faLayerGroup, faEnvelope } from"@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Footer from "../components/footer"
import Accordion from "../components/accordion"
import aboutOne from "../assets/images/ValidityAbout1.png"

import "../assets/css/about.css"

class About extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
 }

 componentWillMount = () => {
   ReactGA.pageview('/About');
 }

 render() {
   return(
     <div className="navigationPage">
     <Page>
       <GridColumn layout="compact">
     <div className="pageHeader">
      <FontAwesomeIcon className="paperIcon" color="#815aff" icon={faLayerGroup} size="2x"/>
      <div className="headerText">
        About
      </div>
     </div>
     <Paper className="aboutModal">
      <p className="aboutHeader"> Background </p>
      From an original idea of simple voting evolved a mechanism of data integrity, that truly incentives non-bias
      verification from a communal approach. Many systems of evaluation usually construct claims based on internal perspectives to the analysing body with no aspects of external validation. This can either lead to corruptive or unpure statements or logic.
      <img className="aboutOne" src={aboutOne}/>
      Think of Validity as a governing body, not like a government where there is a select group of people who dictate the flow of operations and ensure a state of hierarchy in the process. The metaphysical body is the users who decide to partake in the validation process, we call these individuals <b>validators</b> they define the final authority for any movements within the decentralised <b>'election'</b> so to speak. In return for contributing their general perspectives and confirming claims from within validation reports, they receive a reward which incubates a recurring commitment towards the process. One of the major
      problems of governance orientated <b>decentralised applications</b> (dApps) is the turnout for events.
      <span className="spacingParagraph"/>
      With ongoing participation to the eco-system, validators can have the ability to conform an accurate and trustworthy track-record that is related to their identity which in turn has more staking weight than the average voter. Credible identities within the infrastructure are entitled to larger validation rewards, This minimalises the attack vector of an event being skewed by market manipulation if one was to purchase a significant amount of VLDY tokens abruptly. Event data and analysis data are then leveraged to be quantified into an overall score for integration into the Validity rating system.
     <p className="aboutHeader"> Frequently Asked Questions </p>
     <Accordion/>
     </Paper>
     <Footer className="aboutFooter">
     <div className="footerContact">
       <p>
         <a style={{color: 'white'}} href="mailto:airdrop@vldy.org" target="_blank">
           <FontAwesomeIcon color="#bda8ff" icon={faEnvelope} size="lg"/>&nbsp;&nbsp;&nbsp;airdrop@vldy.org
         </a>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a style={{color: 'white'}} href="mailto:team@vldy.org" target="_blank">
          <FontAwesomeIcon color="#bda8ff" icon={faEnvelope} size="lg"/>
          &nbsp;&nbsp;&nbsp;team@vldy.org
       </a>
      </p>
      <br></br>
      <p>
       <a style={{color: 'white'}} href="https://t.me/ValiditySupport" target="_blank">
         <FontAwesomeIcon color="#bda8ff" icon={faTelegramPlane} size="lg"/>
         &nbsp;&nbsp;&nbsp;@ValiditySupport
       </a>
      </p>
     </div>
     <div className="footerRights">
     <p>© Validity 2019. All rights reserved.</p>
     </div>
     </Footer>
     </GridColumn>
     </Page>
     </div>
   )
  }
}

export default About;
