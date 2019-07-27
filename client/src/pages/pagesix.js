import React, { Component } from "react";

import { faShareAlt, faFlask, faChartArea, faChartLine, faStarHalfAlt, faTag, faSitemap, faFileCode, faCalendar, faBalanceScale } from "@fortawesome/free-solid-svg-icons"
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
         [{ title: "Airdrop Tier 1", value: 30, color: "#0cff6f" },
         { title: "Airdrop Tier 2", value: 20, color: "#0c23ff" },
         { title: "Airdrop Tier 3", value: 10, color: "#ff0c23" },
         { title: "Team", value: 17.5, color: "#00bfff" },
         { title: "Community fund", value: 15, color: "#815aff" },
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
                  <FontAwesomeIcon icon={faFileCode} color="#815aff" size="lg"/>&nbsp;&nbsp;&nbsp;
                  <i>Address: <a href=""><b>0xafc2f2d803479a2af3a72022d54cc0901a0ec0d6</b></a></i>
                </p>
                <p className="tokenTwo">
                  <i>Supply: <b>50,600,000,000</b></i>
                  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faStarHalfAlt} color="#815aff" size="lg"/>
                </p>
                <p className="tokenThree">
                  <i>Network: <b>Ethereum</b></i>
                  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSitemap} color="#815aff" size="lg"/>
                </p>
                <p className="tokenFour">
                  <i>Token: <b>ERC20d</b></i>
                  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTag} color="#815aff" size="lg"/>
                </p>
                <p className="tokenFive">
                  <i>Ticker: <b>VLDY</b></i>
                  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faShareAlt} color="#815aff" size="lg"/>
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
