import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

import { faBook, faMugHot, faCrosshairs } from "@fortawesome/free-solid-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"

class PageSeven extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
      <div className="page7">
        <Page>
        <Grid layout="compact">
          <GridColumn>
            <div className="pageBody">
              <div className="h5">
                <FontAwesomeIcon icon={faBook} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Resources
              </div>
              <a className="resourceOne" href="https://medium.com/@samuel.jj.gosling/what-is-communal-validation-and-why-does-it-matter-8634dcba2133">
                <div className="resourceIcon"><FontAwesomeIcon icon={faMugHot} color="#815aff" size="sm"/></div>
                <div className="resourceText" >
                What is Communal Validation & why does it matter?
                </div>
              </a>
              <a className="resourceTwo" href="https://medium.com/coinmonks/cryptocurrency-and-blockchain-red-flags-e0ba71885136">
                <div className="resourceIcon" href=""><FontAwesomeIcon icon={faCrosshairs} color="#815aff" size="sm"/></div>
                <div className="resourceText" >
                Cryptocurrency & Blockchain red flags
                </div>
              </a>
              <a className="resourceThree" href="https://github.com/validitycrypto/validity-hybrid-tipbot">
                <div className="resourceIcon"><FontAwesomeIcon icon={faDiscord} color="#815aff" size="sm"/></div>
                <div className="resourceText" href="">
                  Validity tipbot Readme
                </div>
              </a>
            </div>
          </GridColumn>
         </Grid>
        </Page>
      </div>
    )
  }
}

export default PageSeven;
