import React, { Component } from "react";

import Page  from "@atlaskit/page";
import vldy from "../assets/images/vldy.png"
import Grid from '@material-ui/core/Grid';

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
          <Grid container direction="column" justify='space-between' alignItems='center'>
            <Grid item>
              <img alt="landingLogo" className="landingLogo" src={vldy}/>
            </Grid>
            <Grid item>
              <label className="landingTitle">Validity</label>
            </Grid>
          </Grid>
        </Page>
      </div>
    )
  }
}

export default Landing;
