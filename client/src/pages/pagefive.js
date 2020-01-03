import React, { Component } from "react";

import { faAppleAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Grid from '@material-ui/core/Grid';
import Page from "@atlaskit/page"

import productPreview from "../assets/images/product.png"

class PageFive extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
      <div className="page5">
        <Page>
          <Grid container direction="column">
            <Grid item>
              <div className="h5">
                <FontAwesomeIcon icon={faAppleAlt} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Product
              </div>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems='center'>
            <Grid item>
              <i className="productTagline">A portfolio tracker you can trust...</i>
            </Grid>
            <Grid item>
              <img alt="dekstopProduct" className="desktopProduct" src={productPreview}/>
            </Grid>
          </Grid>
        </Page>
      </div>
    )
  }
}

export default PageFive;
