import React, { Component } from "react"
import ReactGA from "react-ga";

// UX

  // Misc
import { faChartArea, faChartLine, faBalanceScale, faCalendar, faFileCode, faFlask, faMugHot, faBook, faCode, faPaintBrush, faFire, faComment, faTag, faRocket, faCodeBranch, faCoffee, faFingerprint, faInfinity, faStarHalfAlt, faFemale, faMale, faUsers, faShareAlt, faFileMedicalAlt, faGem, faStar, faCrosshairs, faSitemap, faShieldAlt, faDove, faLink, faStreetView, faCheck, faTimes, faLayerGroup } from "@fortawesome/free-solid-svg-icons"
import { faReact, faEthereum, faPython, faGithub, faLinkedin, faTelegramPlane, faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Atlaskit
import Page, { Grid, GridColumn } from "@atlaskit/page";
import SectionMessage from "@atlaskit/section-message";

  // MatieralUI
import Paper from "@material-ui/core/Paper"

import TokenChart from "./components/tokenchart"
import TeamCard from "/components/teamcard"
import Landing from "./pages/landing"

// Images
import greenCircle from "./assets/images/green-circle.png"
import redCircle from "./assets/images/red-circle.png"
import outlineEth from "./assets/images/ethoutline.png"
import productPreview from "./assets/images/product.png"
import messages1 from "./assets/images/messages1.png"
import lines1 from "./assets/images/lines1.png"
import gitcoin from "./assets/images/gitcoin.png"
import base1 from "./assets/images/base1.png"
import world from "./assets/images/world.png"
import gozzy from "./assets/images/gozzy.png"
import lukas from "./assets/images/lukas.png"
import marcos from "./assets/images/marcos.png"
import eth from "./assets/images/ethereum.png"
import dao from "./assets/images/dao.png"
import bcc from "./assets/images/bcc.png"


class Home extends Component {
  constructor(props) {
    super(props)
      this.state = {
        blanketComponent: false,
        sideBar: false,
        stageModal: 0,
        optionOne: null,
        optionTwo: null,
        optionthree: null,
        optionFour: null,
        optionFive: null,
        segment: 0,
        flags: [],
      }
    }

      formEmail = (event) => this.setState({ email: event.target.value });
      formTelegram = (event) => this.setState({ telegram: event.target.value });
      formDiscord = (event) => this.setState({ discord: event.target.value });
      formFacebook = (event) => this.setState({ facebook: event.target.value });
      formTwitter = (event) => this.setState({ twitter: event.target.value });
      formWallet = (event) => this.setState({ wallet: event.target.value });
      revealApplication = () => this.setState({ isApply: true });
      scrollToBottom = () => this.bottomRef.scrollIntoView(true);

      formData = () => {
        if(this.state.email !== undefined
           && this.state.telegram !== undefined
           && this.state.discord !== undefined
           && this.state.twitter !== undefined
           && this.state.facebook !== undefined
           && this.state.wallet.length === 42){
              var data = {
                telegram: this.state.telegram,
                discord: this.state.discord,
                twitter: this.state.twitter,
                facebook: this.state.facebook,
                wallet: this.state.wallet
              };
          }
      }

      mobileOptimisation = async() => {
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
          <TokenChart/>
        );
      }


 render() {
  return (
    <div>
      <Landing/>
      <div className="page1">
       <Page>
         <Grid layout="compact">
           <GridColumn>
           <div className="page1-body">
             <div className="h1">
               <FontAwesomeIcon icon={faLayerGroup} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;What is Validity?
             </div>
             <p className="pagePoint">Cryptocurriencies are blockchain technology have been depicted in many different frames of light, with this, there is a huge lack of underlying acknowledgement of the technology within. </p>
             <p className="pagePoint">The general sentiment of the capabilities of profit-making in this field distort the true integrity of these permissionless currencies and projects but more importantly the peoples aim behind them. </p>
             <p className="pagePoint">In 2017, 81% of all ICO"s resulted in unfavourable situations for investors, some of which were caused by hacks and others were scams. </p>
             <p className="pagePoint">Validity is a communally verifiable platform for investors to contribute their general perspectives regarding currencies, tokens and projects alike.  </p>
           </div>
           </GridColumn>
           <GridColumn>
           <div className="validatingGraphic">
             <img alt="base1" className="base1" src={base1}/>
             <div className="lines1edit"><img alt="lines1" className="lines1" src={lines1}/></div>
             <div className="wrong"><FontAwesomeIcon icon={faTimes}/></div>
             <div className="right"><FontAwesomeIcon icon={faCheck}/></div>
             <div><img alt="bcc" className="bcc" src={bcc}/></div>
             <div className="messages1edit"><img alt="messages1" className="messages1" src={messages1}/> </div>
           </div>
           </GridColumn>
         </Grid>
       </Page>
     </div>
     <div className="page2">
       <Page>
         <Grid layout="compact">
           <GridColumn>
             <div className="pageBody">
               <div className="h2">
                 <FontAwesomeIcon icon={faStreetView} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Communal Validation
               </div>
               <div className="codecommunal">
               <b>Communal Validation;</b> <i>Peer production is based on equipotential participation, i.e. the a priori self-selection of participants, and the communal vetting of the quality of their work in the process of production itself;</i>
               </div>
               <div className="traits">
                 <div className="traitPoint"><FontAwesomeIcon icon={faLink} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Self-governing</div>
                 <div className="traitPoint"><FontAwesomeIcon icon={faShieldAlt} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Sybil-proof</div>
                 <div className="traitPoint"><FontAwesomeIcon icon={faDove} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Pure</div>
               </div>
             </div>
           </GridColumn>
           <GridColumn>
             <img alt="world" className="world" src={world}/>
           </GridColumn>
         </Grid>
       </Page>
   </div>
   <div className="page3">
     <Page>
       <Grid layout="compact">
         <GridColumn>
           <div className="pageBody">
           <div className="h3">
             <FontAwesomeIcon icon={faSitemap} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;How does it work?
           </div>
           <div className="stageOne">
             <div className="stageNumber">1</div>
             <div className="stageText">
               A poll is created for delegating a subject of 5 projects by demand and request, the winning entity is then confirmed for the validation process.
             </div>
           </div>
           <div className="stageTwo">
             <div className="stageNumber">2</div>
             <div className="stageText">
               An intrinsic analysis and due-dillegence is executed upon the entities employee"s, product and ultimately it"s integrity.
             </div>
           </div>
           <div className="stageThree">
             <div className="stageNumber">3</div>
             <div className="stageText">
               The investigation is then distributely proposed to validitors, in order to create a non-bias form of verification via communal validation.
             </div>
           </div>
           <div className="stageFour">
             <div className="stageNumber">4</div>
             <div className="stageText">
              Validators engage in a interactive voting process using Validity"s unique UX, to express their outlook on the project via three options; positive, neutral or negative
             </div>
           </div>
           <div className="stageFive">
             <div className="stageNumber">5</div>
             <div className="stageText">
               The concluding results are combined and are quantified out of a rating of 10, the distributed analysis then acts as a source of evaluation for future onlooking investors.
             </div>
           </div>
           </div>
         </GridColumn>
      </Grid>
     </Page>
   </div>
   <div className="page4">
     <Page>
       <Grid layout="compact">
         <GridColumn>
           <div className="pageBody">
             <div className="h4">
               <FontAwesomeIcon icon={faUsers} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Why use Validity?
             </div>
             <img alt="daoGraphic" className="daoGraphic" src={dao}/>
             <div className="traitOne">
               <div className="stageIcon"><FontAwesomeIcon icon={faFingerprint} color="#815aff" size="xs"/></div>
               <div className="stageAlpha">
                 vID"s <i>(Validation Indentifiers)</i> are a form of <b><i>self-sovereign</i></b> identities and are unique to each voter.
               </div>
             </div>
             <div className="traitTwo">
               <div className="stageIcon"><FontAwesomeIcon icon={faShieldAlt} color="#815aff" size="xs"/></div>
               <div className="stageAlpha">
                 The <b><i>ERC20d</i></b> token staking allocates sybil attack immunity to validations, allowing pure results to blossom.
               </div>
             </div>
             <div className="traitThree">
               <div className="stageIcon"><FontAwesomeIcon icon={faStar} color="#815aff" size="xs"/></div>
               <div className="stageAlt" >
                 Validators are rewarded in VLDY tokens for participating, creating an incentive to vote.
               </div>
             </div>
             <div className="traitFour">
               <div className="stageIcon"><FontAwesomeIcon icon={faCrosshairs} color="#815aff" size="xs"/></div>
               <div className="stageAlt" >
                 Make the crypto-sphere a safer place for everyone, by helping filter out the bad projects from the good.
               </div>
             </div>
             <div className="traitFive">
               <div className="stageIcon"><FontAwesomeIcon icon={faInfinity} color="#815aff" size="xs"/></div>
               <div className="stageAlt" >
                 The validation data is utilised to create a public ledger of qualitative crypto-currency <b><i>ratings</i></b>.
               </div>
             </div>
             <div className="traitSix">
               <div className="stageIcon"><FontAwesomeIcon icon={faGem} color="#815aff" size="xs"/></div>
               <div className="stageAlpha" >
                 Validity is <b><i>decentrilised autonomous organisation</i></b>, meaning power to the people.
               </div>
             </div>
           </div>
         </GridColumn>
       </Grid>
     </Page>
   </div>
   <div className="page5">
     <Page>
     <Grid layout="compact">
       <GridColumn>
         <div className="pageBody">
           <div className="h5">
             <FontAwesomeIcon icon={faCode} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Product
           </div>
           <img alt="dekstopProduct" className="desktopProduct" src={productPreview}/>
           <i className="productTagline">A portfolio tracker you can trust..</i>
         </div>
       </GridColumn>
      </Grid>
     </Page>
   </div>
   <div className="page6" onMouseOver={() => this.setState({ chartComponent: this.renderChart() })}>
     <Page>
       <Grid layout="compact">
         <GridColumn>
         <div className="pageBody">
           <div className="h4">
             <FontAwesomeIcon icon={faFlask} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Tokeneconomics
           </div>
             {this.state.chartComponent}
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
           <div className="tokenData">
           <p className="pagePoint"><i><FontAwesomeIcon icon={faChartArea} color="#815aff" size="lg"/>
           &nbsp;&nbsp;&nbsp;Transactional volume (Weekly): <b>{this.props.weeklyVolume} VLDY</b></i></p>
           <p className="pagePoint"><i><FontAwesomeIcon icon={faChartLine} color="#815aff" size="lg"/>
           &nbsp;&nbsp;&nbsp;Transactional velocity (Weekly): <b>{this.props.tokenVelocity}</b></i></p>
           <p className="pagePoint"><i><FontAwesomeIcon icon={faBalanceScale} color="#815aff" size="lg"/>
           &nbsp;&nbsp;&nbsp;Total transactions (All-time): <b>{this.props.totalTransactions}</b></i></p>
           <p className="pagePoint"><i><FontAwesomeIcon icon={faCalendar} color="#815aff" size="lg"/>
          &nbsp;&nbsp;&nbsp; Volume Index: <b>{this.props.weeklyIndex}</b></i></p>
           </div>
         </GridColumn>
       </Grid>
     </Page>
   </div>
   <div className="page7">
     <Page>
     <Grid layout="compact">
       <GridColumn>
         <div className="pageBody">
           <div className="h5">
             <FontAwesomeIcon icon={faBook} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Resources
           </div>
           <a className="resourceOne" href="https://medium.com/@samuel.jj.gosling/what-is-communal-validation-and-why-does-it-matter-8634dcba2133">
             <div className="resourceIcon"><FontAwesomeIcon icon={faMugHot} color="#815aff" size="sm"/></div>
             <div className="resourceText" >
             What is Communal Validation & why does it matter?
             </div>
           </a>
           <a className="resourceTwo" href="https://medium.com/coinmonks/cryptocurrency-and-blockchain-red-flags-e0ba71885136">
             <div className="resourceIcon" href=""><FontAwesomeIcon icon={faCrosshairs} color="#815aff" size="sm"/></div>
             <div className="resourceText" >
             Cryptocurrency & Blockchain red flags
             </div>
           </a>
           <a className="resourceThree" href="https://github.com/validitycrypto/validity-hybrid-tipbot">
             <div className="resourceIcon"><FontAwesomeIcon icon={faDiscord} color="#815aff" size="sm"/></div>
             <div className="resourceText" href="">
               Validity tipbot Readme
             </div>
           </a>
         </div>
       </GridColumn>
      </Grid>
     </Page>
   </div>
   <div className="page8">
     <Page>
       <Grid layout="compact">
         <GridColumn>
           <div className="teamBody">
             <div className="h4">
               <FontAwesomeIcon icon={faUsers} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Validity core
             </div>
             <TeamCard data={{
               class: "cardOne",
               name: "Samuel JJ Gosling",
               image: gozzy,
               position: "Founder",
               nationality: "Ireland 🇮🇪",
               bio: "test",
               twitter: "a",
               telegram: "a",
               linkedin: "a",
               discord: "a",
               github: false
             }}/>
             <TeamCard data={{
               class: "cardTwo",
               name: "Marcos B Rubianes",
               image: marcos,
               position: "Strategist",
               nationality: "Switzerland 🇨🇭",
               bio: "test",
               twitter: "https://twitter.com/Foxxrex",
               telegram: "https://t.me/CryptoProphet33",
               linkedin: "https://www.linkedin.com/in/marcos-benítez-rubianes-9b19b864/",
               discord: "",
               github: false
             }}/>
             <TeamCard data={{
               class: "cardThree",
               name: "Lukas Fischereder",
               image: lukas,
               position: "Analyst",
               nationality: "Austria 🇦🇹",
               bio: "test",
               twitter: "https://twitter.com/LukiFischereder",
               telegram: "https://t.me/lufisch",
               linkedin: "https://www.linkedin.com/in/lukas-fischereder-bb5758145",
               discord: "https://discordapp.com/users/406776100299997185/",
               github: false
             }}/>
           </div>
         </GridColumn>
       </Grid>
     </Page>
   </div>
   <div className="page9">
       <Page>
         <Grid layout="compact">
           <GridColumn>
             <div className="pageBody">
               <div className="h5">
                 <FontAwesomeIcon icon={faStar} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Roadmap
               </div>
               <div className="roadmapOne"
                 onMouseOver={() => this.setState({ stageModal: 1})}
                 onMouseOut={() => this.setState({ stageModal: 0})}>
                 <img alt="circleRoadmap" className="circleRoadmap" src={greenCircle} />
                 <img alt="logoOne" className="logoOne" src={eth} />
               </div>
               {((this.state.stageModal === 1) || (window.screen.width < 600) || (window.screen.height === 1024 && window.screen.width === 768) || (window.screen.height === 1366 && window.screen.width === 1024 )) && (
                 <div className="modalOne">
                   <SectionMessage appearance="confirmation">
                     Ethereum & MVP launch
                   </SectionMessage>
                 </div>
               )}
               <div className="lineOne"/>
               <div className="roadmapTwo"
                 onMouseOver={() => this.setState({ stageModal: 2})}
                 onMouseOut={() => this.setState({ stageModal: 0})}>
                 <img alt="circleRoadmap" className="circleRoadmap" src={redCircle} />
                 <FontAwesomeIcon className="logoThree" icon={faFileMedicalAlt} color="#815aff" size="2x"/>
               </div>
               {((this.state.stageModal === 2) || (window.screen.width < 600) || (window.screen.height === 1024 && window.screen.width === 768) || (window.screen.height === 1366 && window.screen.width === 1024 )) && (
                 <div className="modalTwo">
                   <SectionMessage appearance="error">
                     Validity Whitepaper
                   </SectionMessage>
                 </div>
               )}
               <div className="lineTwo"/>
               <div className="roadmapThree"
                 onMouseOver={() => this.setState({ stageModal: 3})}
                 onMouseOut={() => this.setState({ stageModal: 0})}>
                 <img alt="circleRoadmap" className="circleRoadmap" src={redCircle} />
                 <img alt="logoTwo" className="logoTwo" src={gitcoin} />
               </div>
               {((this.state.stageModal === 3) || (window.screen.width < 600) || (window.screen.height === 1024 && window.screen.width === 768) || (window.screen.height === 1366 && window.screen.width === 1024 )) && (
                 <div className="modalThree">
                   <SectionMessage appearance="error">
                     Gitcoin grants & funding
                   </SectionMessage>
                 </div>
               )}
               <div className="lineThree"/>
               <div className="roadmapFour"
               onMouseOver={() => this.setState({ stageModal: 4})}
               onMouseOut={() => this.setState({ stageModal: 0})}>
                 <img alt="circleRoadmap" className="circleRoadmap" src={redCircle} />
                 <FontAwesomeIcon className="logoThree" icon={faCoffee} color="#815aff" size="2x"/>
               </div>
               {((this.state.stageModal === 4) || (window.screen.width < 600) || (window.screen.height === 1024 && window.screen.width === 768) || (window.screen.height === 1366 && window.screen.width === 1024 )) && (
                 <div className="modalFour">
                   <SectionMessage appearance="error">
                     Find talent and partnerships
                   </SectionMessage>
                 </div>
               )}
               <div className="lineFour"/>
               <div className="roadmapFive"
               onMouseOver={() => this.setState({ stageModal: 5})}
               onMouseOut={() => this.setState({ stageModal: 0})}>
                 <img alt="circleRoadmap" className="circleRoadmap" src={redCircle} />
                 <FontAwesomeIcon className="logoThree" icon={faCodeBranch} color="#815aff" size="2x"/>
               </div>
               {((this.state.stageModal === 5) || (window.screen.width < 600) || (window.screen.height === 1024 && window.screen.width === 768) || (window.screen.height === 1366 && window.screen.width === 1024 )) && (
                 <div className="modalFive">
                   <SectionMessage appearance="error">
                     Beta product
                   </SectionMessage>
                 </div>
               )}
               <div className="lineFive"/>
               <div className="roadmapSix"
                 onMouseOver={() => this.setState({ stageModal: 6})}
                 onMouseOut={() => this.setState({ stageModal: 0})}>
                 <img alt="circleRoadmap" className="circleRoadmap" src={redCircle} />
                 <FontAwesomeIcon className="logoThree" icon={faRocket} color="#815aff" size="2x"/>
               </div>
               {((this.state.stageModal === 6) || (window.screen.width < 600) || (window.screen.height === 1024 && window.screen.width === 768) || (window.screen.height === 1366 && window.screen.width === 1024 )) && (
                 <div className="modalSix">
                   <SectionMessage appearance="error">
                     Product launch
                   </SectionMessage>
                 </div>
               )}
             </div>
           </GridColumn>
         </Grid>
       </Page>
     </div>
     <div className="page10">
       <Page>
         <Grid layout="compact">
           <GridColumn>
             <div className="pageBody">
               <div className="h3">
                 <FontAwesomeIcon icon={faFemale} color="#815aff" size="xs"/>&nbsp;
                 <FontAwesomeIcon icon={faMale} color="#815aff" size="xs"/>&nbsp;&nbsp;&nbsp;Get involved
               </div>
               <div className="ethereumWrapper"><img alt="ethereumLogo" className="ethereumLogo" src={outlineEth}/></div>
               <Paper className="teamOnboarding">
                 <p>Do you think you have what it takes to join our team? We are looking for innovational and committed people to help make Validity a reality. The onboarding process for one to become appicable requires a face to face interview with our founder. If you are interested please send your resume and a short bio to:</p>
                 <br></br><p><b><i>team@validity.ae</i></b></p>
               </Paper>
               <Paper className="desiredTraits">
                <p><b><i>We are looking for skilled in..</i></b></p>
                <br></br><p><FontAwesomeIcon icon={faEthereum} color="#815aff" size="sm"/>&nbsp;Solidity (Assembly)</p>
                <br></br><p><FontAwesomeIcon icon={faPython} color="#815aff" size="sm"/>&nbsp;Python (Machine Learning)</p>
                <br></br><p><FontAwesomeIcon icon={faReact} color="#815aff" size="sm"/>&nbsp;React.js </p>
                <br></br><p><FontAwesomeIcon icon={faPaintBrush} color="#815aff" size="sm"/>&nbsp; UX/UI design </p>
                <br></br><p><FontAwesomeIcon icon={faFire} color="#815aff" size="sm"/>&nbsp;Growth hacking </p>
               </Paper>
             </div>
           </GridColumn>
         </Grid>
       </Page>
     </div>
     </div>
    )
  }
}

export default Home;
