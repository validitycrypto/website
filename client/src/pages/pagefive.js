import React, { Component } from "react";

import { faAppleAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

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
        <Grid layout="compact">
          <GridColumn>
            <div className="pageBody">
              <div className="h5">
                <FontAwesomeIcon icon={faAppleAlt} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Product
              </div>
              <img alt="dekstopProduct" className="desktopProduct" src={productPreview}/>
              <i className="productTagline">A portfolio tracker you can trust...</i>
            </div>
          </GridColumn>
         </Grid>
        </Page>
      </div>
    )
  }
}

export default PageFive;
