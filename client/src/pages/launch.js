import React, { Fragment, Component } from "react";

import Paper from "@material-ui/core/Paper"
import Lozenge from "@atlaskit/lozenge"
import { Table } from 'semantic-ui-react'

import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

import ethStreet from "../assets/images/eth-street.png"

class Launch extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
 }

 render() {
   return(
     <Paper className="newsModal">
     <div className="newsHeader">
        Ethereum launch
        <span className="newsCategory">
          <Lozenge maxWidth="500" isBold appearance="new">Announcement</Lozenge>
        </span>
     </div>
     <img className="ethBranding" src={ethStreet}/>
     <p class="newsAuthor">
     Wednesday 14th of July 2019
     </p>
     <div className="newsIntro">
     <p>First of all, thank you all for waiting patiently over the past year, we couldn't have asked for a more viable
     and supportive community, we hope this see this continue and blossom even further in the upcoming months.
     As from now, Validity official announcements will only be pushed here because major article sites like Medium have now turned to a subscription model for certain articles. We believe it is the
     best course of action to allow full accessibility to the latest news and endeavours within the Validity
     eco-system for anyone who wishes with no financial constraints attached.</p>
     <br></br>
     <p>So as of today, we are sad to say that Validity is no longer a resident of the Ethergem network. VLDY tokens distributed on this network are no longer valid and are technically outdated. Validity is porting to the Ethereum network for a countless number of reasons but the ultimate fact of the matter was the onboarding process to incubating projects to build on EGEM was not sufficient enough. As this being a community-driven
     and open-source initiative, it is crucial that every situation is leveraged to its maximum potential.
     Regardless of what opinions and feelings that have been exerted because of this progression, we would like to
     take the time to thank the EGEM community and team for all they have done and wish them the best of luck
     for the future to come. That said, there is <b>zero affliation</b> between Validity and Ethergem as of today. To
     re-enforce this statement. We are sad to say that our Strategist Halmat, has taken it under his own authority to
     step back from the Validity core team, to incentivize our non-bias ideology within our workforce with
     external assets. We wish the best with his future with Ethergem. </p>
     <div className="newsBase">
     <p> Onto the more impeding matters at had; our porting to Ethereum, the depiction of our future product, plans for
     exchange listings, aspirations for funding opportunities, airdrop allocation reformation, community alignment and
     finally team onboarding.</p>
     <p className="newsSubject">Ethereum</p>
     <p>We are happy to say that we are officially launched on Ethereum, a true where medium where Validity can leverage
     the technological support of Solidity at the ground level and create an easy incentive to developers
     willing to help the cause. The ERC20d token contract has been reformed under certain some different elements:
     </p>
     <ul>
     <li>
        ValidityID's have been completed reformatted to the bytes32 codex, each id is a form of sovereignty of the subjects
        address and block.number confirmed at the time of the genesis transaction for that said subject.
      </li>
     <li>
         Security audits executed in custom Mocha tests, Solium, and finally Mythril. A number
         different attack vectors have been curated to ensure the least probability of failure with the
         contract.
      </li>
    </ul>
  <p> With this new progression towards a potential medium of the adoption and incubation of Validity infrastructure, we
      have found more realistic short-term goals that incentivize the financial-less state of the initiative but also the user accessibility of the VLDY token and web3 application. We are now correlating our time to secure many different portals
      for access to cryptocurrency markets but ensuring that the exchanges have higher security but ultimately credibility.
      So below are three exchanges that we are going to make our initial priority to integrate the official
      Validity token for trading.</p>
      <ul>
      <li>
        <a href="https://kyber.network/" target="_blank"> Kyber </a> - A on-chain decentralised exchange and liqudity aggreator
       </li>
      <li>
        <a href="https://uniswap.exchange/" target="_blank"> Uniswap </a> - A decentralised liquidity aggreator
      </li>
       <li>
         <a href="https://idex.market/" target="_blank"> IDEX </a>- A hybrid decentralised exchange
        </li>
      </ul>
      <p>With the following accomplished we shall move onto target more credible market possibilities and portals of liquidity
      in some major and widely adopted centralised exchanges, more to be disclosed at a later date.</p>
      <p className="newsSubject">Deployment</p>
      <p> The VLDY token contracted was succssfully deployed and is now verified asset on Etherscans Tokentracker, you can view the
      first genesis ValidityID for the founding account and the genesis mint. Below is contract metadata for users to integrate
      with myetherwallet for storage and metamask for transactional operatives.</p>
      <ul>
      <li>
        <i>Address:</i> <a href="https://etherscan.io/token/0x904da022abcf44eba68d4255914141298a7f7307" target="_blank"> 0x904da022abcf44eba68d4255914141298a7f7307 </a>
       </li>
      <li>
      <i>Decimals:</i> 18
      </li>
       <li>
        <i>Symbol:</i> VLDY
        </li>
      </ul>
      <p className="newsSubject">Airdrops</p>
      <p> Given that the previous structure for the token alloction was flawed we made it my initiatve to fix the aspects for
      a uniform distribution, the structure for incentivising users based on early entitlement was not wrong but was approached
      in a convoluted manner. Users should not get the ability to claim more just becuase they were around at a certain period of
      time, this does not incentivise then long term interacivity of token holders. Better to create a tiered system where rewards
      are consistant within that tier, allowing the users who proactively claim the rewards on a perodic basis to be more intune
      with projects endevours and a chance to dedicate their time to becoming a committed but viable validator. What was previously
      demoted at rounds, are now tiers, within these are consistant rounds of allocation until reaching the allocated amount for each
      tier. Below is an graphical insight towards the allocation of the supply within each of the described tiers, in total there will
      be 20 events.
      </p>
      <br></br><br></br>
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
              <Table.Cell>8</Table.Cell>
              <Table.Cell>&nbsp;&nbsp;2.5%</Table.Cell>
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
      <br></br><br></br>
      <p>Airdrop tier one round three is now open for registrations and the precending rounds have been distributed with the new allocations.
        Below are the applicant numbers for each round and the value distributed to each particpant.
      </p>
      <br></br><br></br>
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
      <br></br><br></br>
      <p className="newsSubject">Funding</p>
      <p>Although the project may not need external funding, it would be a benefactor if it was achieved, as it could be a catalyst to the evolution of our final product and forming a legal stance in establishing a company alongside the platform for many
      different potential services and developments. Hiring external specialities to incubate the product and project alongside a number of marketing movements would help widespread awareness of the initiative. Validity is open to reason with any private equity firms given a certain state of parameters but for now, the main orientation is to look for moreso angel investments, like for example grants. As seen on our new roadmap we will be aiming to create a grant on the gitcoin platform, users are free to donate at their own free will to support the project. It is important to note that this is not a portal to invest. More details to be evolved in the coming months of the state of this progression. </p>
      <p className="newsSubject">Team onboarding</p>
      <p>In order to spread awareness about the many positions available for enrolment within the Validity core team, we have listed
      Validity as a company on AngelList, we will be adding several different positions that will go-in-depth to some of the requirements of each role. You can either enquire via the platform when published or reach us out personally at <b> team@vldy.org</b>  </p>
      <p className="newsSubject">Community alignment</p>
      <p>We've noticed a lot of bots entering our discord community in particular, so we are going to orchestrate an initiative to implement human verification for new arrivals within both our discord and telegram groups. The Validity tipbot has successfully been ported Ethereum alongside our launch, users who won allocation of tokens as apart of our Discord giveaways can contact a member of the team to redeem the swapped tokens. Below are some new implementations to the tipbot across both platforms: </p>
      <ul>
      <li>
        MVP validation information command
      </li>
      <li>
       Fee implementation
      </li>
      <li>
       Custom approvals
      </li>
      </ul>
      <p> Onwards! </p>
     </div>
     </div>
     </Paper>
   )
  }
}

export default Launch;
