import React, { Component } from "react";

import { faStreetView, faShieldAlt, faDove, faBezierCurve } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

import world from "../assets/images/world.png"

class PageTwo extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
      <div className="page2">
        <Page>
          <Grid layout="compact">
            <GridColumn>
              <div className="pageBody">
                <div className="h2">
                  <FontAwesomeIcon icon={faBezierCurve} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Communal Validation
                </div>
                <div className="codecommunal">
                <b>Communal Validation;</b> <i>Peer production is based on equipotential participation, i.e. the a priori self-selection of participants, and the communal vetting of the quality of their work in the process of production itself;</i>
                </div>
                <div className="traits">
                  <div className="traitPoint"><FontAwesomeIcon icon={faStreetView} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Self-governing</div>
                  <div className="traitPoint"><FontAwesomeIcon icon={faShieldAlt} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Sybil-proof</div>
                  <div className="traitPoint"><FontAwesomeIcon icon={faDove} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Pure</div>
                </div>
              </div>
            </GridColumn>
            <GridColumn>
              <img alt="world" className="world" src={world}/>
            </GridColumn>
          </Grid>
        </Page>
    </div>
    )
  }
}

export default PageTwo;
