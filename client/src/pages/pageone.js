import React, { Component } from "react";

import { faSeedling, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Grid from '@material-ui/core/Grid';
import Page from "@atlaskit/page"

import { PURPLE_PRIMARY } from '../constants/palette';

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
          <Grid container direction="column">
            <Grid item>
              <div className="h1">
                <FontAwesomeIcon icon={faSeedling} color={PURPLE_PRIMARY} size="sm"/>&nbsp;&nbsp;&nbsp;What is Validity?
              </div>
            </Grid>
            <Grid item container direction="row" justify='space-between' alignItems='center'>
              <Grid item container direction="column">
                <Grid item>
                  <p className="pagePoint">Validity is a self-governing cryptocurrency evaluation platform, to filter out the bad and outshine the good. Achieved by utilising on-chain governance, through peer review and voting. </p>
                </Grid>
                <Grid item>
                  <p className="pagePoint">With a general lack of technical understanding of blockchain amongst users, alongside an unregulated landscape, paves a way for illicit activity to thrive. </p>
                </Grid>
                <Grid item>
                  <p className="pagePoint">In 2017, 81% of all <b>Initial Coin Offerings (ICO)</b> resulted in unfavourable situations, either via scams or hacks. There is no current viable reference point for investors.</p>
                </Grid>
                <Grid item>
                  <p className="pagePoint">Imagine a platform where one can verify the integrity of an investment decision but also share their perspectives and be rewarded for it. A portfolio tracker with quantified ratings and governed data allowing one to make safer investments. </p>
                </Grid>
              </Grid>
              <Grid item>
                <div className="validatingGraphic">
                  <div className="baseWrapper">
                    <img alt="base" className="base" src={base}/>
                  </div>
                  <div className="linesWrapper">
                    <img alt="lines" className="lines" src={lines}/>
                  </div>
                  <div className="wrong">
                    <FontAwesomeIcon icon={faTimes}/>
                  </div>
                  <div className="right">
                    <FontAwesomeIcon icon={faCheck}/>
                  </div>
                  <div className="bccWrapper">
                    <img alt="bcc" className="bcc" src={bcc}/>
                  </div>
                  <div className="messages1edit">
                    <img alt="messages1" className="messages1" src={messages}/>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Page>
     </div>
    )
  }
}

export default PageOne;
