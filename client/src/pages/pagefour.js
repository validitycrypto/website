import React, { Component, Fragment } from "react";

import { faSync, faFingerprint, faShieldAlt, faStar, faCrosshairs, faInfinity, faGem } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Grid from '@material-ui/core/Grid';
import Page from "@atlaskit/page"

import { PURPLE_PRIMARY } from '../constants/palette';

import dao from "../assets/images/dao.png"

class PageFour extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
      <div className="page4">
        <Page>
          <Grid container direction="column">
            <Grid item>
              <div className="h4">
                <FontAwesomeIcon icon={faSync} color={PURPLE_PRIMARY} size="sm"/>&nbsp;&nbsp;&nbsp;Why use Validity?
              </div>
            </Grid>
            <Grid item container direction='row' justify='space-between'>
              <Grid item>
                <div className="traitLeft">
                  <div className="stageIcon"><FontAwesomeIcon icon={faFingerprint} color={PURPLE_PRIMARY} size="xs"/></div>
                  <div className="stageAlpha">
                    ValidityID's are a form of <b>self-sovereign</b> identities and are unique to each voter.
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div className="traitRight">
                  <div className="stageIcon"><FontAwesomeIcon icon={faShieldAlt} color={PURPLE_PRIMARY} size="xs"/></div>
                  <div className="stageAlpha">
                    The ERC20d token staking allocates <b>sybil</b> attack immunity to validations, allowing pure results to blossom.
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid item container direction='row' justify='space-between'>
              <Grid item>
                <div className="traitLeftAlt">
                  <div className="stageIcon"><FontAwesomeIcon icon={faInfinity} color={PURPLE_PRIMARY} size="xs"/></div>
                  <div className="stageAlpha">
                    Validation metadata is used to form qualitative crypto-currency ratings.
                  </div>
                </div>
              </Grid>
              <Grid item>
                <img alt="daoGraphic" className="daoGraphic" src={dao}/>
              </Grid>
              <Grid>
                <div className="traitRightAlt">
                  <div className="stageIcon"><FontAwesomeIcon icon={faStar} color={PURPLE_PRIMARY} size="xs"/></div>
                  <div className="stageAlt" >
                    Validators are rewarded in VLDY tokens for participating, creating an incentive to vote.
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid item container direction='row' justify='space-between'>
              <Grid item>
                <div className="traitLeft">
                  <div className="stageIcon"><FontAwesomeIcon icon={faCrosshairs} color={PURPLE_PRIMARY} size="xs"/></div>
                  <div className="stageAlt" >
                    Make the crypto-sphere a safer place for everyone, by helping filter out the bad from the good .
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div className="traitRight">
                  <div className="stageIcon"><FontAwesomeIcon icon={faGem} color={PURPLE_PRIMARY} size="xs"/></div>
                  <div className="stageAlpha" >
                    Validity is a <b>decentralised autonomous organisation (DAO)</b>, meaning power to the people.
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

export default PageFour;
