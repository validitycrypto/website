import React, { Fragment, Component } from "react";

import Paper from "@material-ui/core/Paper"
import Lozenge from "@atlaskit/lozenge"

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
        Ethereum & MVP launch
        <span className="newsCategory">
          <Lozenge maxWidth="500" isBold appearance="new">Announcement</Lozenge>
        </span>
     </div>
     <img className="ethBranding" src={ethStreet}/>
     <div class="newsAuthor">
     Saturday 5th of July 2019
     </div>
     <div className="newsIntro">
     <p>First of all, thank you all for waiting patiently over the past year, I couldn't of asked for a more viable
     and supportive community, I hope this see this continue and blossom even further in the upcoming months.
     As from now, Validity official announcements will only be pushed here due to the fact that major article
     sites like Medium have now turned to a subscriptional model for certain articles. We believe it is the
     best course of action to allow full accesibility to the latest news and endevours within the Validity
     eco-system for anyone who wishes with no finnancial constrainsts attached.</p>
     <br></br>
     <p>So as of today, I am sad to say that Validity is no longer a resdient of the Ethergem network. VLDY tokens
     distributed on this blockchain are no longer valid and are technically outdated. Validity is porting to
     the Ethereum network for a countless number of reasons but the ultimate fact of the matter was the onboarding
     process to incubating projects to build on EGEM was not sufficient enough. As this being a community-driven
     and open source initiative, it is crucial that every situation is leveraged to it's maximum potential.
     Regardless of what opinions and feelings that have been exerted because of this progression, we would like to
     take the time to thank the EGEM community and team for all they have done and wish them the best of luck
     for the future to come. That said, there is <b>zero affliation</b> between Validity and Ethergem as of today. To
     re-enforce this statement. I am sad to say that our Stratigist Halmat, has taken it under his own authority to
     step back from the Validity core team, in order to incentivize our non-bias ideology within our workforce with
     external assets. We wish the best with his future with Ethergem. </p>
     <div className="newsBase">
     <p> Onto the more impeading matters at had; our porting to Ethereum, the depiction of our future product, plans for
     exchange listings, aspirations for funding opportunities, airdrop allocation reformation, community alignment and
     finally team onboarding.</p>
     <p className="newsSubject">Ethereum</p>
     <p>I am happy to say that we are officially launched on Ethereum, a true where medium where Validity can leverage
     the techological support of Solidity at the ground level and create an easily onborded incentive to developers
     willing to help the cause. The ERC20d token contract has been reformed under certain a number of different elements:
     </p>
     <ul>
     <li>ValidityID's have been completed reformatted to the bytes32 codex, each id is a form of soverity of the subjects
          address and block.number conformed at the time of the genesis tranasction for that said subject.
      </li>
     <li>Transactional volume implementation for users to leverage a verfiyable and pure source of asset actvity and
        compute metrics like weekly transactional average amounts and token velocity. In turn this can be utilised to
        validate any attempts of fake volume some exchanges may try to enhibit.
     </li>
     <li>Security audits executed in custom Mocha tests, Manitcore API and finally Mythril security analysis. A number
         different attack vectors have been curated in order to ensure the least probability of faliure with the
         contract.
      </li>
    </ul>
  <p> With this new progression towards a potential medium of the adoption and incubation of Validity infastructure, we
      have found more realistic short-term goals that incentize the finnancialess state of initiative and user accesibility
      of the VLDY token and web3 application. We are now correlating our time to secure a number of different portals
      for access to cryptocurrency markets but ensuring that the exchanges have higher security but ultimately credibility.
      So below are three exchanges that we are going to make our initial priority to integrate the official
      Validity token for trading.</p>
      <ul>
      <li>
        Kyber - A on-chain decentralised exchange and liqudity aggreator
       </li>
      <li>
        Uniswap - A decentralised liquidity aggreator
      </li>
       <li>
         IDEX - A hybrid decentralised exchange
        </li>
      </ul>
      <p>With the following accomplished we shall move onto target more credible market possibilities and portals of liquidity
      in some major and widely adopted centralised exchanges, more to be disclosed at a later date.</p>
      <p className="newsSubject">Airdrops</p>
      <p> Given that the previous structure for the token alloction was flawed I made it my initiatve to fix the aspects for
      a uniform distribution, the structure for incentivising users based on early entitlement was not wrong but was approached
      in a convoluted manner. Users should not get the ability to claim more just becuase they were around at a certain period of
      time, this does not incentivise then long term interacivity of token holders. Better to create a tiered system where rewards
      are consistant within that tier, allowing the users who proactively claim the rewards on a perodic basis to be more intune
      with projects endevours and a chance to dedicate their time to becoming a committed but viable validator. What was previously
      demoted at rounds, are now tiers, within these are consistant rounds of allocation until reaching the allocated amount for each
      tier. Below is an graphical insight towards the allocation of the supply within each of the described tiers, in total there will
      be 20 events.
      </p>
      <p className="newsSubject">Airdrops</p>

     </div>
     </div>
     </Paper>
   )
  }
}

export default Launch;
