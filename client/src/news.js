import React, { Fragment, Component } from "react";
import ReactGA from "react-ga";

import { faBullhorn } from"@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

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
        </GridColumn>
      </Page>
     </div>
   )
  }
}

export default News;
