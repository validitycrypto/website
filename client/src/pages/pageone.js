import React, { Component } from "react";

import { faLayerGroup, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons"
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
               <FontAwesomeIcon icon={faLayerGroup} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;What is Validity?
             </div>
             <p className="pagePoint">Cryptocurriencies are blockchain technology have been depicted in many different frames of light, with this, there is a huge lack of underlying acknowledgement of the technology within. </p>
             <p className="pagePoint">The general sentiment of the capabilities of profit-making in this field distort the true integrity of these permissionless currencies and projects but more importantly the peoples aim behind them. </p>
             <p className="pagePoint">In 2017, 81% of all ICO"s resulted in unfavourable situations for investors, some of which were caused by hacks and others were scams. </p>
             <p className="pagePoint">Validity is a communally verifiable platform for investors to contribute their general perspectives regarding currencies, tokens and projects alike.  </p>
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
