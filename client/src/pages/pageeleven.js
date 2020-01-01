import React, { Component } from "react";

import { faGavel, faSnowboarding, faPaintBrush, faMale, faFemale } from "@fortawesome/free-solid-svg-icons"
import { faReact, faEthereum, faPython } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

import outlineEth from "../assets/images/ethoutline.png"

import Paper from "@material-ui/core/Paper"

class PageEleven extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
    <div className="page11">
      <Page>
        <Grid layout="compact">
          <GridColumn>
            <div className="pageBody">
              <div className="h3">
                <FontAwesomeIcon icon={faFemale} color="#815aff" size="xs"/>&nbsp;
                <FontAwesomeIcon icon={faMale} color="#815aff" size="xs"/>&nbsp;&nbsp;&nbsp;Get involved
             </div>
             <div className="ethereumWrapper"><img alt="ethereumLogo" className="ethereumLogo" src={outlineEth}/></div>
             <Paper className="teamOnboarding">
               <p>Do you think you have what it takes to join our team?</p>
               <br></br>
               <p> We are looking for innovational and committed people to help make Validity a reality. The onboarding process for one to become appicable requires a face to face interview with our founder. </p>
               <br></br>
               <p> If you are interested please send your resume and a short bio to:</p>
               <br></br>
               <p><a href="mailto:team@vldy.org"><b>team@vldy.org</b></a></p>
             </Paper>
             <Paper className="desiredTraits">
               <p><b><i>We are looking people with specialisation in...</i></b></p>
               <br></br><p><FontAwesomeIcon icon={faPython} color="#815aff" size="1x"/><span className="traitText">Machine learning</span></p>
               <br></br><p><FontAwesomeIcon icon={faSnowboarding} color="#815aff" size="1x"/><span className="traitText">Growth hacking</span></p>
               <br></br><p><FontAwesomeIcon icon={faPaintBrush} color="#815aff" size="1x"/><span className="traitText">UX/UI design</span></p>
               <br></br><p><FontAwesomeIcon icon={faReact} color="#815aff" size="1x"/><span className="traitText">React.js</span></p>
               <br></br><p>&nbsp;<FontAwesomeIcon icon={faEthereum} color="#815aff" size="1x"/><span className="traitText">Solidity</span></p>
               <br></br><p><FontAwesomeIcon icon={faGavel} color="#815aff" size="1x"/><span className="traitText">Law</span></p>
             </Paper>
           </div>
         </GridColumn>
        </Grid>
      </Page>
     </div>
    )
  }
}

export default PageEleven;
