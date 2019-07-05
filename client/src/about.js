import React, { Fragment, Component } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page"

import Paper from "@material-ui/core/Paper"

import { faLeaf } from"@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import aboutOne from "../assets/images/ValidityAbout1.png"
import aboutTwo from "../assets/images/ValidityAbout2.png"
import aboutThree from "../assets/images/ValidityAbout3.png"

import "../assets/css/about.css"

class About extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
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
     <p>  Validity is a community-driven project that was actually born admist the disorientation of a scam, not one of great magnititude but one of great realisation.
          There will <b>never</b> be an <b>Initial Coin Offering</b> (ICO) for Validity due to the sole reason that how can one trust a entity entirely based on speculation.
          Trust is a trait that is not obtainable via a transactional exchange, it has to be earned by exemplifying transperancy, committment and the ability to deliver.
    </p>
    <img className="aboutOne" src={aboutOne}/>
    <p>   An adversary was acting on behalf of the founder
          for a utility NXT token called <a>DIX Asset</a>, as the original founder had went MIA, this project has little value
          but onlooking speculation thought of it to gain market traction with it's high supply. Among these unaware
          investors were Samuel (Founder) and Lukas (Analyst). The amoral actor tricked some untechnical and new
          users to the cryptocurrency space, to buy tokens manually via the website via over the counter traders for cheaper rates
          than exchange prices. Unfortuantely those who particpated, were conned out of their investment and the adeversary had a
          large allocation of the supply, so as he made his abrupt exit he decided to bring the market with him.
          There was left 500 people in the dust, some of which oirginating from minute economies where value is decremental
          to the western world. Samuel came to the realisation that this probably occurs on a weekly basis, just there probably
          wasn't enough awarness or a medium where on could go to express their expiernence from investing in a particular asset.
          At the time he was learning Solidity, so he leveraged the idea of goverence in his mind alongside a system of evaluation.
     </p>
     <img className="aboutTwo" src={aboutTwo}/>
     <p>  From a original idea of simple voting evolved into a mechanisim of data integrity, that truly incentivses non-bias
          verification from a communal approach. Many systems of evalutation usually construct claims based on internal perspectives
          to the analysing body with no aspects of external validation. This can either lead to corruptive or unpure statements or logic.
          For example, a notorious example in the cryptocurrency space is <a>ICOBench</a>, which promoted itself as an accurate ICO evalution
          platform, which was not the case. Admist the hustling of the 2017 rush, many who followed the ratings of the infamous platform were
          lead into a over-sold quantification that was most likely purchased. Many of which turned out to be scams or inappicable returns,
          it was clear there was a niche for asset evaluation within the industry, so Samuel decided take the first step towards creating it.
     </p>
    <img className="aboutThree" src={aboutThree}/>
    <p>
          Think of Validity as a governing body, not like a goverement where there is a select group of people who dictate the flow of
          operations and ensure as state of hierarchy in the process. The metaphysical body is the users who decide to partake in the
          valdiation process, we call these individuals <b>validators</b> they define the final authority for any movements within the
          decentralised <b>'election'</b> so to speak. In return for contributing their general perspectives and confirming claims from
          within validation reports, they recieve a reward which incubates a reocurring committiment towards the process. One of the major
          problems of goverence orientated <b>decentralised applications</b> (dApps) is the turnout for events. With ongoing particapation
          to the eco-system, validators can have the ability to conform an accurate and trustworthy track-record that is related to their
          identity which in turn has more staking weight than the average voter. Credible identities within the infastructure are entitled
          to larger validation rewards, This minimalises the attack vector of a event being skewed by market manipulation, if one was to
          purchase a significant amount of VLDY tokens in an abrupt manner. Event data and analysis data are then leveraged to be quantified
          into a overall score for integration into the Validity rating system.
     </p>
     </Paper>
     </GridColumn>
     </Page>
     </div>
   )
  }
}

export default About;
