import React, { Component } from "react";

import { faFire, faPaintBrush, faMale, faFemale } from "@fortawesome/free-solid-svg-icons"
import { faReact, faEthereum, faPython } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

import outlineEth from "../assets/images/ethoutline.png"

import Paper from "@material-ui/core/Paper"

class PageTen extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
    <div className="page10">
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
               <p>Do you think you have what it takes to join our team? We are looking for innovational and committed people to help make Validity a reality. The onboarding process for one to become appicable requires a face to face interview with our founder. If you are interested please send your resume and a short bio to:</p>
               <br></br><p><b><i>team@validity.ae</i></b></p>
             </Paper>
             <Paper className="desiredTraits">
               <p><b><i>We are looking for skilled in...</i></b></p>
               <br></br><p><FontAwesomeIcon icon={faEthereum} color="#815aff" size="sm"/>&nbsp;Solidity (Assembly)</p>
               <br></br><p><FontAwesomeIcon icon={faPython} color="#815aff" size="sm"/>&nbsp;Python (Machine Learning)</p>
               <br></br><p><FontAwesomeIcon icon={faReact} color="#815aff" size="sm"/>&nbsp;React.js </p>
               <br></br><p><FontAwesomeIcon icon={faPaintBrush} color="#815aff" size="sm"/>&nbsp; UX/UI design </p>
               <br></br><p><FontAwesomeIcon icon={faFire} color="#815aff" size="sm"/>&nbsp;Growth hacking </p>
             </Paper>
           </div>
         </GridColumn>
        </Grid>
      </Page>
     </div>
    )
  }
}

export default PageTen;
