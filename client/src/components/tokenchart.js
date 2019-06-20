import React, { Fragment, Component } from "react";
import PieChart from "react-minimal-pie-chart"
import SectionMessage from "@atlaskit/section-message";

const tokenData = [
    { title: "Airdrop Tier 1", value: 30, color: "#0cff6f" },
    { title: "Airdrop Tier 2", value: 20, color: "#0c23ff" },
    { title: "Airdrop Tier 3", value: 10, color: "#ff0c23" },
    { title: "Team", value: 15, color: "#00bfff" },
    { title: "Community fund", value: 20, color: "#815aff" },
    { title: "Validation supply", value: 5, color: "#ff0c9c" },
  ];

class TokenChart extends Component {
  constructor(props){
      super(props)
      this.state = {
        metaData: { title: "Pick a chart value", value: false },
        items: [{ key: [0, 1, 2, 3]}],
        chartComponent: <div/>,
        data: tokenData,
      }
    }

    componentWillMount = async() => {
      this.setState({
        chartComponent: this.renderChart()
      });
    }

      renderChart = () => {
        return(
          <PieChart
            animationDuration={1000}
            segmentsStyle={{ transition: "stroke .3s" }}
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
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
          [{ title: "Airdrop tier 1", value: 30, color: "#0cff6f" },
            { title: "Airdrop tier 2", value: 20, color: "#0c23ff" },
            { title: "Airdrop tier 3", value: 10, color: "#ff0c23" },
            { title: "Team", value: 15, color: "#00bfff" },
            { title: "Community fund", value: 20, color: "#815aff" },
            { title: "Validation supply", value: 5, color: "#ff0c9c" }]
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
      <Fragment>
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
      </Fragment>
    )
  }
}

export default TokenChart;
