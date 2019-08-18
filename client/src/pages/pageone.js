import React, { Component } from "react";

import { faSeedling, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

import messages from "../assets/images/messages1.png"
import lines from "../assets/images/lines1.png"
import base from "../assets/images/base1.png"
import bcc from "../assets/images/bcc.png"

class PageOne extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
      <div className="page1">
       <Page>
         <Grid layout="compact">
           <GridColumn>
           <div className="page1-body">
             <div className="h1">
               <FontAwesomeIcon icon={faSeedling} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;What is Validity?
             </div>
             <p className="pagePoint">Validity is a self-governing cryptocurrency evaluation platform, to filter out the bad and outshine the good. Achieved by utilising on-chain governance, through peer review and voting. </p>
             <p className="pagePoint">With a general lack of technical understanding of blockchain amongst users, alongside an unregulated landscape, paves a way for illicit activity to thrive. </p>
             <p className="pagePoint">In 2017, 81% of all <b>Initial Coin Offerings (ICO)</b> resulted in unfavourable situations, either via scams or hacks. There is no current viable reference point for investors.</p>
             <p className="pagePoint">Imagine a platform where one can verify the integrity of an investment decision but also share their perspectives and be rewarded for it. A portfolio tracker with quantified ratings and governed data allowing one to make safer investments. </p>
           </div>
           </GridColumn>
           <GridColumn>
            <div className="validatingGraphic">
              <img alt="base1" className="base1" src={base}/>
              <div className="lines1edit">
                <img alt="lines1" className="lines1" src={lines}/>
              </div>
              <div className="wrong">
                <FontAwesomeIcon icon={faTimes}/>
              </div>
              <div className="right">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <div>
                <img alt="bcc" className="bcc" src={bcc}/>
              </div>
              <div className="messages1edit">
                <img alt="messages1" className="messages1" src={messages}/>
              </div>
             </div>
           </GridColumn>
         </Grid>
       </Page>
     </div>
    )
  }
}

export default PageOne;
