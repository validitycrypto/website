import React, { Fragment, Component } from "react";
import ReactGA from "react-ga";


import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faBullhorn } from"@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

import Footer from "../components/footer"
import Launch from "../pages/launch"

import "../assets/css/news.css"

class News extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
 }

 componentWillMount = () => {
   ReactGA.pageview('/News');
 }

 render() {
   return(
     <div className="navigationPage">
      <Page>
        <GridColumn layout="compact">
        <div className="pageHeader">
         <FontAwesomeIcon className="paperIcon" color="#815aff" icon={faBullhorn} size="2x"/>
         <div className="headerText">
           News
         </div>
        </div>
        <Launch/>
        <Footer className="newsFooter">
          <div className="footerContact">
          <p><FontAwesomeIcon color="#bda8ff" icon={faEnvelope} size="lg"/>&nbsp;&nbsp;&nbsp;airdrop@vldy.org
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon color="#bda8ff" icon={faEnvelope} size="lg"/>&nbsp;&nbsp;&nbsp;team@vldy.org
          </p>
          <br></br>
          <p><FontAwesomeIcon color="#bda8ff" icon={faTelegramPlane} size="lg"/>&nbsp;&nbsp;&nbsp;@ValiditySupport</p>
          </div>
        </Footer>
        </GridColumn>
        </Page>
     </div>
   )
  }
}

export default News;
