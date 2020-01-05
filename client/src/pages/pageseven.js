import React, { Component } from "react";

import { faParachuteBox } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Table } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid';
import Page from "@atlaskit/page"

class PageSeven extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
      <div className="page7">
        <Page>
          <Grid container direction="column" justify='space-around'>
            <Grid item>
              <div className="h4">
                <FontAwesomeIcon icon={faParachuteBox} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Airdrops
              </div>
            </Grid>
            <Grid item>
              <div className="pageHeader">
                Validity believes the optimal approach to a uniform distribution is the deliverance of assets with zero monetary incentive,
                which is why 60% of the supply is distributed via airdrops. Only applicants that comply by the airdrop terms and conditions are
                viable for compensation. You can apply for our airdrop <a>here</a>.
              </div>
            </Grid>
            <Grid item>
              <div className="tableWrapper">
                <label> Round Allocation </label>
                <Table celled inverted selectable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Tier</Table.HeaderCell>
                      <Table.HeaderCell>Rounds</Table.HeaderCell>
                      <Table.HeaderCell>Supply (%)</Table.HeaderCell>
                      <Table.HeaderCell>Allocation (VLDY)</Table.HeaderCell>
                   </Table.Row>
                   </Table.Header>
                   <Table.Body>
                    <Table.Row>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>8</Table.Cell>
                      <Table.Cell>&nbsp;&nbsp;3.75%</Table.Cell>
                      <Table.Cell>1,897,500,000</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>2</Table.Cell>
                      <Table.Cell>10</Table.Cell>
                      <Table.Cell>&nbsp;&nbsp;2%</Table.Cell>
                      <Table.Cell>&nbsp;&nbsp;1,265,000,000</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>3</Table.Cell>
                      <Table.Cell>10</Table.Cell>
                      <Table.Cell>&nbsp;&nbsp;1%</Table.Cell>
                      <Table.Cell>&nbsp;&nbsp;&nbsp;&nbsp;506,000,000</Table.Cell>
                    </Table.Row>
                 </Table.Body>
                </Table>
              </div>
            </Grid>
            <Grid item>
              <div className="tableWrapper">
                <label> Concluded Rounds </label>
                <Table celled inverted selectable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Tier</Table.HeaderCell>
                      <Table.HeaderCell>Round</Table.HeaderCell>
                      <Table.HeaderCell>Participants</Table.HeaderCell>
                      <Table.HeaderCell>Allocation (VLDY)</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;375</Table.Cell>
                      <Table.Cell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5,060,000</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>2</Table.Cell>
                      <Table.Cell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;600</Table.Cell>
                      <Table.Cell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3,162,500</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </Grid>
          </Grid>
        </Page>
      </div>
    )
  }
}

export default PageSeven;
