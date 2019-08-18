import React, { Component } from "react";

import { faSync, faFingerprint, faShieldAlt, faStar, faCrosshairs, faInfinity, faGem } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

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
          <Grid layout="compact">
            <GridColumn>
              <div className="pageBody">
                <div className="h4">
                  <FontAwesomeIcon icon={faSync} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Why use Validity?
                </div>
                <img alt="daoGraphic" className="daoGraphic" src={dao}/>
                <div className="traitOne">
                  <div className="stageIcon"><FontAwesomeIcon icon={faFingerprint} color="#815aff" size="xs"/></div>
                  <div className="stageAlpha">
                    ValidityID's are a form of <b>self-sovereign</b> identities and are unique to each voter.
                  </div>
                </div>
                <div className="traitTwo">
                  <div className="stageIcon"><FontAwesomeIcon icon={faShieldAlt} color="#815aff" size="xs"/></div>
                  <div className="stageAlpha">
                    The ERC20d token staking allocates <b>sybil</b> attack immunity to validations, allowing pure results to blossom.
                  </div>
                </div>
                <div className="traitThree">
                  <div className="stageIcon"><FontAwesomeIcon icon={faStar} color="#815aff" size="xs"/></div>
                  <div className="stageAlt" >
                    Validators are rewarded in VLDY tokens for participating, creating an incentive to vote.
                  </div>
                </div>
                <div className="traitFour">
                  <div className="stageIcon"><FontAwesomeIcon icon={faCrosshairs} color="#815aff" size="xs"/></div>
                  <div className="stageAlt" >
                    Make the crypto-sphere a safer place for everyone, by helping filter out the bad from the good .
                  </div>
                </div>
                <div className="traitFive">
                  <div className="stageIcon"><FontAwesomeIcon icon={faInfinity} color="#815aff" size="xs"/></div>
                  <div className="stageAlt" >
                    Validation metadata is used to form qualitative crypto-currency <b>ratings</b>.
                  </div>
                </div>
                <div className="traitSix">
                  <div className="stageIcon"><FontAwesomeIcon icon={faGem} color="#815aff" size="xs"/></div>
                  <div className="stageAlpha" >
                    Validity is a <b>decentralised autonomous organisation (DAO)</b>, meaning power to the people.
                  </div>
                </div>
              </div>
            </GridColumn>
          </Grid>
        </Page>
      </div>
    )
  }
}

export default PageFour;
