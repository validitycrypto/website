import React, { Component } from "react";

import { faThumbtack, faFlask, faFeatherAlt, faCoins, faSitemap, faFileInvoice } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Grid from '@material-ui/core/Grid';
import Page from "@atlaskit/page"

import PieChart from "react-minimal-pie-chart"
import Spline from "../components/spline";

const tokenData = [
    { title: "Airdrop Tier 1", value: 30, color: "#00d076" },
    { title: "Airdrop Tier 2", value: 20, color: "#0c23ff" },
    { title: "Airdrop Tier 3", value: 10, color: "#ff0c23" },
    { title: "Team", value: 17.5, color: "#00bfff" },
    { title: "Community fund", value: 15, color: "#815aff" },
    { title: "Validation supply", value: 7.5, color: "#ff0c9c" },
  ];

class PageSix extends Component {
  constructor(props){
      super(props)
      this.state = {
        metaData: { title: "Pick a value", value: false },
        items: [{ key: [0, 1, 2, 3]}],
        chartComponent: <div/>,
        data: tokenData,
      }
   }

   componentDidMount = async() => {
     if((window.screen.height === 1024 && window.screen.width === 768)
        || (window.screen.height === 1366 && window.screen.width === 1024)
        || (window.screen.width < 600 )){
       await this.setState({
         metaData: { title: "Pick a value", value: true },
         chartComponent: this.renderChart(),
       })
     }
   }

     renderChart = () => {
       return(
         <PieChart
           animationDuration={1000}
           segmentsStyle={{ transition: "stroke .3s" }}
           onMouseOver={this.onMouseOver}
           onMouseOut={this.onMouseOut}
           onClick={this.onMouseOver}
           data={this.state.data}
           paddingAngle={5}
           lineWidth={25}
           radius={20}
           animate
         />
       );
     }

     onMouseOut = (e, d, i) => {
       this.setState({
         metaData: {
           title: "Pick a value",
           value: " "
         },
         data:
         [{ title: "Airdrop T1", value: 30, color: "#00d076" },
         { title: "Airdrop T2", value: 20, color: "#0c23ff" },
         { title: "Airdrop T3", value: 10, color: "#ff0c23" },
         { title: "Team fund", value: 17.5, color: "#00bfff" },
         { title: "Eco fund", value: 15, color: "#815aff" },
         { title: "Validation supply", value: 7.5, color: "#ff0c9c" }]
       });
     }

     onMouseOver = (e, d, i) => {
       var focusedData;
       const data = d.map((entry, index) => {
         if(index === i) focusedData = entry;
         return index === i ? entry.color = "grey" : tokenData[index];
       });
       this.setState({
         metaData: focusedData,
         data: data,
       });
     }


  render() {
    return(
      <div className="page6" onMouseOver={() => this.setState({ chartComponent: this.renderChart() })}>
        <Page>
        <Grid container direction="column" justify='stretch'>
          <Grid item>
            <div className="h4">
              <FontAwesomeIcon icon={faFlask} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Tokeneconomics
            </div>
          </Grid>
          <Grid item container direction='row' justify='space-between'>
            <Grid item>
              <div className="metricLeft">
                <FontAwesomeIcon icon={faFileInvoice} color="#815aff" size="lg"/>&nbsp;&nbsp;&nbsp;
                <b>Address:</b> <a target="_blank" href="https://etherscan.io/token/0x904da022abcf44eba68d4255914141298a7f7307">
                0x904da022abcf44eba68d4255914141298a7f7307</a>
              </div>
              <div className="metricLeft">
                <FontAwesomeIcon icon={faCoins} color="#815aff" size="lg"/> &nbsp;&nbsp;&nbsp;
                <b>Supply:</b> 50,600,000,000
              </div>
               <div className='marketStatistics'>
                <b> <span className="emojiIcon">🦄</span>&nbsp;&nbsp;&nbsp;Liquidity Reserves </b>
              </div>
           </Grid>
            <Grid item>
              <div className="metricRight">
                <b>Network:</b> Ethereum
                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSitemap} color="#815aff" size="lg"/>
              </div>
              <div className="metricRight">
                <b>Symbol:</b> VLDY
                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faFeatherAlt} color="#815aff" size="lg"/>
              </div>
              <div className="metricRight">
                <b>Decimals:</b> 18
                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faThumbtack} color="#815aff" size="lg"/>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <div className="tokenChart">
              <label className="metaTitle">
                {this.state.metaData.title}
                <span class="metaValue">
                  {this.state.metaData.value}%
                </span>
              </label>
              {this.state.chartComponent}
            </div>
            <Spline />
          </Grid>
        </Grid>
      </Page>
    </div>
    )
  }
}

export default PageSix;
