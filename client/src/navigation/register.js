import React, { Fragment, Component } from "react";
import ReactGA from "react-ga";

import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faBullhorn } from"@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"


import TextField from "@atlaskit/field-text"
import Button from "@atlaskit/button"

import "../assets/css/register.css";

class Register extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
 }

 componentWillMount = () => {
   ReactGA.pageview('/Register');
 }

 render() {
   return(
     <div className="navigationPage">
      <Page>
        <GridColumn layout="compact">
          <div className="registrationTitle">Generate an ValidityID</div>
          <Button className="web3Button">
            &nbsp;Connect&nbsp;
          </Button>
        </GridColumn>
        </Page>
     </div>
   )
  }
}

export default Register;
