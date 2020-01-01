import React, { Component } from "react";

import { GridColumn } from "@atlaskit/page"
import ReactGA from 'react-ga'

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
      <Launch/>
     </div>
   )
  }
}

export default News;
