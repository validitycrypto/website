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
          <Grid container direction="row" alignItems='center' justify="center">
            <Grid item>
              <div className="landingBranding">
                <Grid container direction="column">
                  <Grid item>
                    <img alt="landingLogo" className="landingLogo" src={vldy}/>
                  </Grid>
                  <Grid>
                    <p className="landingTitle">Validity</p>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Page>
      </div>
    )
  }
}

export default Landing;
