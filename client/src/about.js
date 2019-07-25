import React, { Fragment, Component } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page"

import Paper from "@material-ui/core/Paper"
import ReactGA from "react-ga";

import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import { faLeaf, faEnvelope } from"@fortawesome/free-solid-svg-icons"
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
      <FontAwesomeIcon className="paperIcon" color="#815aff" icon={faLeaf} size="2x"/>
      <div className="headerText">
        About
      </div>
     </div>
     <Paper className="aboutModal">
      <p className="aboutHeader"> Background </p>
          From a original idea of simple voting evolved into a mechanisim of data integrity, that truly incentivses non-bias
          verification from a communal approach. Many systems of evalutation usually construct claims based on internal perspectives
          to the analysing body with no aspects of external validation. This can either lead to corruptive or unpure statements or logic.
          <span className="spacingParagraph"/>
          For example, a notorious example in the cryptocurrency space is <a>ICOBench</a>, which promoted itself as an accurate ICO evalution
          platform, which was not the case. Admist the hustling of the 2017 rush, many who followed the ratings of the infamous platform were
          lead into a over-sold quantification that was most likely purchased. Many of which turned out to be scams or inappicable returns,
          it was clear there was a niche for asset evaluation within the industry, so Samuel decided take the first step towards creating it.
          <img className="aboutOne" src={aboutOne}/>
          Think of Validity as a governing body, not like a goverement where there is a select group of people who dictate the flow of
          operations and ensure as state of hierarchy in the process. The metaphysical body is the users who decide to partake in the
          valdiation process, we call these individuals <b>validators</b> they define the final authority for any movements within the
          decentralised <b>'election'</b> so to speak. In return for contributing their general perspectives and confirming claims from
          within validation reports, they recieve a reward which incubates a reocurring committiment towards the process. One of the major
          problems of goverence orientated <b>decentralised applications</b> (dApps) is the turnout for events.
          <span className="spacingParagraph"/>
          With ongoing particapation
          to the eco-system, validators can have the ability to conform an accurate and trustworthy track-record that is related to their
          identity which in turn has more staking weight than the average voter. Credible identities within the infastructure are entitled
          to larger validation rewards, This minimalises the attack vector of a event being skewed by market manipulation, if one was to
          purchase a significant amount of VLDY tokens in an abrupt manner. Event data and analysis data are then leveraged to be quantified
          into a overall score for integration into the Validity rating system.

     <p className="aboutHeader"> Frequently Asked Questions </p>
     <Accordion/>
     </Paper>
     <Footer className="aboutFooter">
       <div className="footerContact">
       <p><FontAwesomeIcon color="#bda8ff" icon={faEnvelope} size="lg"/>&nbsp;&nbsp;&nbsp;airdrop@vldy.org
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <FontAwesomeIcon color="#bda8ff" icon={faEnvelope} size="lg"/>&nbsp;&nbsp;&nbsp;team@vldy.org
       </p>
       <br></br>
       <p><FontAwesomeIcon color="#bda8ff" icon={faTelegramPlane} size="lg"/>&nbsp;&nbsp;&nbsp;@ValiditySupport</p>
       </div>
     </Footer>
     </GridColumn>
     </Page>
     </div>
   )
  }
}

export default About;
