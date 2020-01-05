import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Grid from '@material-ui/core/Grid';
import Page from "@atlaskit/page"

import { faBookOpen } from "@fortawesome/free-solid-svg-icons"

import Accordion from '../components/accordion';

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
          <Grid container direction="column" justify='strech'>
            <Grid item>
              <div className="h5">
                <FontAwesomeIcon icon={faBookOpen} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;FAQ
              </div>
            </Grid>
            <Grid item>
              <div className="accordionWrapper">
                <Accordion />
              </div>
            </Grid>
         </Grid>
        </Page>
      </div>
    )
  }
}

export default PageTen;
