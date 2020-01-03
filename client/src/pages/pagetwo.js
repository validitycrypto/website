import React, { Component } from "react";

import { faStreetView, faShieldAlt, faDove, faBezierCurve } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Grid from '@material-ui/core/Grid';
import Page from "@atlaskit/page"

import { PURPLE_PRIMARY } from '../constants/palette';

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
          <Grid container direction="column">
            <Grid item>
              <div className="h2">
                <FontAwesomeIcon icon={faBezierCurve} color={PURPLE_PRIMARY} size="sm"/>&nbsp;&nbsp;&nbsp;Communal Validation
              </div>
            </Grid>
            <Grid item>
              <div className="codecommunal">
                <b>Communal Validation;</b> <i>Peer production is based on equipotential participation, i.e. the a priori self-selection of participants, and the communal vetting of the quality of their work in the process of production itself;</i>
              </div>
            </Grid>
            <Grid item container direction="row" justify='space-around' alignItems='center'>
              <Grid item container direction="column" justify='center'>
                <Grid item>
                  <div className="traitPoint"><FontAwesomeIcon icon={faStreetView} color={PURPLE_PRIMARY} size="sm"/>&nbsp;&nbsp;&nbsp;Self-governing</div>
                </Grid>
                <Grid item>
                  <div className="traitPoint"><FontAwesomeIcon icon={faShieldAlt} color={PURPLE_PRIMARY} size="sm"/>&nbsp;&nbsp;&nbsp;Sybil-proof</div>
                </Grid>
                <Grid item>
                  <div className="traitPoint"><FontAwesomeIcon icon={faDove} color={PURPLE_PRIMARY} size="sm"/>&nbsp;&nbsp;&nbsp;Pure</div>
                </Grid>
              </Grid>
              <Grid item>
                <div className="worldWrapper">
                  <img alt="world" className="world" src={world}/>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Page>
    </div>
    )
  }
}

export default PageTwo;
