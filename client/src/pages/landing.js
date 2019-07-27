import React, { Component } from "react";

import Page, { Grid, GridColumn } from "@atlaskit/page";
import vldy from "../assets/images/vldy.png"

class Landing extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
      <div className="landingPage">
        <Page>
          <Grid layout="fluid">
            <GridColumn>
              <div className="landingBranding">
                <img alt="landingLogo" className="landingLogo" src={vldy}/>
                <p className="landingTitle">Validity</p>
              </div>
            </GridColumn>
          </Grid>
        </Page>
      </div>
    )
  }
}

export default Landing;
