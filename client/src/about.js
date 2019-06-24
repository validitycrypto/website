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
     <p>  Validity is a community-driven project that was actually born admist the disorientation of a scam,
          not one of great magnititude but one of great realisation. An adversary was acting on behalf of the founder
          for a utility NXT token called DIX Asset, as the original founder had went MIA, this project has little value
          but onlooking speculation thought of it to gain market traction with it's high supply. Among these unaware
          investors were Samuel (Founder) and Lukas (Analyst). The amoral actor tricked some untechnical and new
          users to the cryptocurrency space, to buy tokens manually via the website via over the counter traders for cheaper rates
          than exchange prices. Unfortuantely those who particpated, were conned out of their investment and the adeversary had a
          large allocation of the supply, so as he made his abrupt exit he decided to bring the market with him.
          There was left 500 people in the dust, some of which oirginating from minute economies where value is decremental
          to the western world. Samuel came to the realisation that this occurs on a weekly basis, just there probably
          wasn't enough awarness or a medium where on could go to express their expiernence from investing in a particular asset.
          At the time he was learning Solidity, so he leveraged the idea of goverence in his mind alongside a system of evaluation.
     </p>
     <img className="aboutOne" src={aboutOne}/>
      <p> Since that moment passed, the project has been built from the ground up soley on his technical abilities for digital
        operatives but with the impeading support of Lukas for management and from the community's interest towards making
        it a reality.
      </p>
      <img className="aboutTwo" src={aboutTwo}/>

      <img className="aboutThree" src={aboutThree}/>

     </Paper>
     </GridColumn>
     </Page>
     </div>
   )
  }
}

export default About;
