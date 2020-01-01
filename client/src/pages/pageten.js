import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

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
        <Grid layout="compact">
          <GridColumn>
            <div className="pageBody">
              <div className="h5">
                <FontAwesomeIcon icon={faBookOpen} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;FAQ
              </div>
              <Accordion />
            </div>
          </GridColumn>
         </Grid>
        </Page>
      </div>
    )
  }
}

export default PageTen;
