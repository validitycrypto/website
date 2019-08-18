import React, { Component } from "react";

import { faThumbtack, faFlask, faChartArea, faChartLine, faFeatherAlt, faCoins, faTag, faSitemap, faFileInvoice, faCalendar, faBalanceScale } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

import PieChart from "react-minimal-pie-chart"
import SectionMessage from "@atlaskit/section-message";

const tokenData = [
    { title: "Airdrop Tier 1", value: 30, color: "#0cff6f" },
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
        metaData: { title: "Pick a chart value", value: false },
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
         metaData: { title: "Pick a chart value", value: true },
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
           title: "Pick a chart value",
           value: " "
         },
         data:
         [{ title: "Airdrop T1", value: 30, color: "#0cff6f" },
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
          <Grid layout="compact">
            <GridColumn>
            <div className="pageBody">
              <div className="h4">
                <FontAwesomeIcon icon={faFlask} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Tokeneconomics
              </div>
              <div className="tokenChart">
                  {this.state.chartComponent}
              </div>
                {this.state.metaData.value !== false && (
                  <div className="modalToken">
                    <SectionMessage appearance="change">
                      <p>{this.state.metaData.title}: {this.state.metaData.value}%</p>
                    </SectionMessage>
                  </div>
                )}
                <p className="tokenOne">
                  <FontAwesomeIcon icon={faFileInvoice} color="#815aff" size="lg"/>&nbsp;&nbsp;&nbsp;
                  Address: <a target="_blank" href="https://etherscan.io/token/0x904da022abcf44eba68d4255914141298a7f7307">
                    <b>0x904da022abcf44eba68d4255914141298a7f7307</b><
                  /a>
                </p>
                <p className="tokenTwo">
                  Supply: <b>50,600,000,000</b>
                  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCoins} color="#815aff" size="lg"/>
                </p>
                <p className="tokenThree">
                  Network: <b>Ethereum</b>
                  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSitemap} color="#815aff" size="lg"/>
                </p>
                <p className="tokenFour">
                  Type: <b>ERC20d</b>
                  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTag} color="#815aff" size="lg"/>
                </p>
                <p className="tokenFive">
                <FontAwesomeIcon icon={faFeatherAlt} color="#815aff" size="lg"/>&nbsp;&nbsp;&nbsp;
                  Ticker: <b>VLDY</b>
                </p>
                <p className="tokenSix">
                <FontAwesomeIcon icon={faThumbtack} color="#815aff" size="lg"/>&nbsp;&nbsp;&nbsp;
                  Decimals: <b>18</b>
                </p>
              </div>
            </GridColumn>
          </Grid>
        </Page>
      </div>
    )
  }
}

export default PageSix;
