import React, { Component } from "react";

import { faUsers, faFingerprint, faShieldAlt, faStar, faCrosshairs, faInfinity, faGem } from "@fortawesome/free-solid-svg-icons"
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
                  <FontAwesomeIcon icon={faUsers} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Why use Validity?
                </div>
                <img alt="daoGraphic" className="daoGraphic" src={dao}/>
                <div className="traitOne">
                  <div className="stageIcon"><FontAwesomeIcon icon={faFingerprint} color="#815aff" size="xs"/></div>
                  <div className="stageAlpha">
                    vID"s <i>(Validation Indentifiers)</i> are a form of <b><i>self-sovereign</i></b> identities and are unique to each voter.
                  </div>
                </div>
                <div className="traitTwo">
                  <div className="stageIcon"><FontAwesomeIcon icon={faShieldAlt} color="#815aff" size="xs"/></div>
                  <div className="stageAlpha">
                    The <b><i>ERC20d</i></b> token staking allocates sybil attack immunity to validations, allowing pure results to blossom.
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
                    Make the crypto-sphere a safer place for everyone, by helping filter out the bad projects from the good.
                  </div>
                </div>
                <div className="traitFive">
                  <div className="stageIcon"><FontAwesomeIcon icon={faInfinity} color="#815aff" size="xs"/></div>
                  <div className="stageAlt" >
                    The validation data is utilised to create a public ledger of qualitative crypto-currency <b><i>ratings</i></b>.
                  </div>
                </div>
                <div className="traitSix">
                  <div className="stageIcon"><FontAwesomeIcon icon={faGem} color="#815aff" size="xs"/></div>
                  <div className="stageAlpha" >
                    Validity is <b><i>decentrilised autonomous organisation</i></b>, meaning power to the people.
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
