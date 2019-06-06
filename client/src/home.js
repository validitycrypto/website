import React, { Component } from 'react'
import firebase from 'firebase'
import ReactGA from 'react-ga';

// UX

  // Misc
import { faMugHot, faUserSecret, faBook, faCode, faPaintBrush, faFire, faMedal, faTag, faRocket, faFileMedicalAlt, faCodeBranch, faCoffee, faHandshake, faGem, faFingerprint, faInfinity, faStarHalfAlt, faLightbulb, faDotCircle, faHome, faPercentage, faFileSignature, faGlobe, faFemale, faMale, faUsers, faShareAlt, faUserTag, faSearch, faStar, faCrosshairs, faSitemap, faShieldAlt, faDove, faLink, faStreetView, faCheck, faTimes, faLayerGroup, faParachuteBox, faEnvelope, faWallet } from '@fortawesome/free-solid-svg-icons'
import { faReact, faPython, faEthereum,faBitcoin, faGithub, faLinkedin, faTelegramPlane, faDiscord, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Icon , Segment , Card, Image } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import BarChart from './bar'

// Atlaskit
import { InlineDialog, Flag, AutoDismissFlag, FlagGroup } from '@atlaskit/flag'
import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import SectionMessage from '@atlaskit/section-message';
import { AtlaskitThemeProvider } from '@atlaskit/theme'
import { AkCodeBlock } from '@atlaskit/code';
import FieldText from '@atlaskit/field-text';
import Modal from '@atlaskit/modal-dialog'
import Lorem from 'react-lorem-component';
import { colors } from '@atlaskit/theme';
import Lozenge from '@atlaskit/lozenge'
import Blanket from '@atlaskit/blanket'
import Button from '@atlaskit/button'
import Select from '@atlaskit/select'

  // MatieralUI
import { fade } from '@material-ui/core/styles/colorManipulator';
import { createMuiTheme } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import PieChart from 'react-minimal-pie-chart';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

// Images
import greenCircle from './images/green-circle.png'
import redCircle from './images/red-circle.png'
import angellist from './images/angellist.png'
import messages1 from './images/messages1.png'
import telegram from './images/telegram.png'
import facebook from './images/facebook.png'
import linkedin from './images/linkedin.png'
import cdreams from './images/cdreams.png'
import twitter from './images/twitter.png'
import discord from './images/discord.png'
import lines1 from './images/lines1.png'
import github from './images/github.png'
import gitcoin from './images/gitcoin.png'
import reddit from './images/reddit.png'
import lines2 from './images/lines2.png'
import base1 from './images/base1.png'
import world from './images/world.png'
import base3 from './images/base3.png'
import gozzy from './images/gozzy.png'
import lukas from './images/lukas.png'
import marcos from './images/marcos.png'
import clabs from './images/clabs.png'
import cnews from './images/cnews.png'
import vldy from './images/vldy.png'
import outlineEth from './images/ethoutline.png'
import productPreview from './images/product.png'
import eth from './images/ethereum.png'
import dao from './images/dao.png'
import bct from './images/bct.png'
import bcc from './images/bcc.png'

// CSS
import 'styled-components'
import './css/homeDesktop.css'
import './css/homeNative.css'
import './css/raleigh.css'

const defaultLabelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
  fill: '#121212',
};

const dataPropType = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    value: PropTypes.number.isRequired,
    key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
  })
);

// Constants
const airdrop = <FontAwesomeIcon icon={faLayerGroup} size='lg'/>

const TeamCard = ({ data }) => {
  return(
  <Card className={data.class} inverted>
    <Image className="teamPhoto" src={data.image}/>
    <Card.Content>
      <Card.Header><span className="blackt">{data.name}</span></Card.Header>
        <Card.Meta>
          <span className="blackt">{data.position}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <span className="blackt">{data.nationality}</span>
      </Card.Content>
      <Card.Content extra>
      <a className="socialLink" href={data.linkedin}>
        <FontAwesomeIcon icon={faLinkedin} color='white' />
      </a>
      <a className="socialLink" href={data.twitter}>
        <FontAwesomeIcon icon={faTwitter} color='white' />
      </a>
      <a className="socialLink" href={data.discord}>
        <FontAwesomeIcon icon={faDiscord} color='white' />
      </a>
      <a className="socialLink" href={data.telegram}>
        <FontAwesomeIcon icon={faTelegramPlane} color='white' />
      </a>
      {data.github != false && (
        <a className="socialLink" href={data.github}>
          <FontAwesomeIcon icon={faGithub} color='white'/>
        </a>
      )}
    </Card.Content>
  </Card>
  );
}


  const styles = createMuiTheme({
     sideBar: {
      background: '#815aff'
    }
  });

const dataMock = [
    { title: 'Airdrop Tier 1', value: 30, color: '#0cff6f' },
    { title: 'Airdrop Tier 2', value: 20, color: '#0c23ff' },
    { title: 'Airdrop Tier 3', value: 10, color: '#ff0c23' },
    { title: 'Team', value: 15, color: '#00bfff' },
    { title: 'Community fund', value: 20, color: '#815aff' },
    { title: 'Validation supply', value: 5, color: '#ff0c9c' },
  ];


class Home extends Component {
  constructor(props) {
    super(props)
      this.state = {
        items: [{key:0, key:1, key:2, key:3 }],
        blanketComponent: false,
        chartComponent: <div/>,
        sideBar: false,
        stageModal: 0,
        segment: 0,
        flags: [],
        data: dataMock,
        metaData: {
        title: "Pick a chart value",
        value: false
        }
      }
      this.onMouseOut = this.onMouseOut.bind(this);
      this.onMouseOver = this.onMouseOver.bind(this);
  }

  componentWillMount = async() => {
    window.addEventListener("resize", this.resizeEvent);
    ReactGA.initialize('UA-140909568-1');
    ReactGA.pageview('/homepage');
    await this.resizeEvent();
    await this.open()
  }

  resizeEvent = async() => {
    if(window.screen.height == 1024 && window.screen.width == 768 || window.screen.height == 1366 && window.screen.width == 1024
       || window.screen.width < 600 ){
      await this.setState({
        metaData: {
          title: "Pick a chart value",
          value: true
        },
        socialRender: this.renderMobile(),
        chartComponent: this.renderChart(),
        menuPadding: '2.5vw',
        menuHeight: "10%"
      })
    } else {
      await this.setState({
        socialRender: this.renderDesktop(),
        menuPadding: '0',
        menuHeight: "10%"
      })
    }
  }

  animateChart = () => {
     this.setState({ segment: 100 })
  }

  scroll = (event) => {
    var element = document.getElementsByClassName(event.value)[0]
    element.scrollIntoView({behavior: "smooth"});
  }

  formEmail = (event) => this.setState({ email: event.target.value });
  formTelegram = (event) => this.setState({ telegram: event.target.value });
  formDiscord = (event) => this.setState({ discord: event.target.value });
  formFacebook = (event) => this.setState({ facebook: event.target.value });
  formTwitter = (event) => this.setState({ twitter: event.target.value });
  formWallet = (event) => this.setState({ wallet: event.target.value });
  scrollToBottom = () => this.bottomRef.scrollIntoView(true);
  accept = () => this.setState({ isSubmitted: false });
  submit = () => this.setState({ isApply: false });
  reveal = () => this.setState({ isApply: true });
  close = () => this.setState({ isOpen: false });
  open = () => this.setState({ isOpen: true });

  formData = () => {
    if(this.state.email != undefined
       && this.state.telegram != undefined
       && this.state.discord != undefined
       && this.state.twitter != undefined
       && this.state.facebook != undefined
       && this.state.wallet.length == 42){
          var data = {
            telegram: this.state.telegram,
            discord: this.state.discord,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            wallet: this.state.wallet
          };
      }
}

  handleDismiss = () => {
    this.setState(prevState => ({
      flags: prevState.flags.slice(1),
    }));
  };

  toggleSidebar = (_bool) => {
    this.setState({ })
  }

  addFlag = () => {
    const newFlagId = this.state.flags.length + 1;
    const flags = this.state.flags.slice();
    flags.splice(0, 0, newFlagId);
    this.setState({ flags });
  }

  renderDesktop = () => {
    return(
    <div>
      <a href='https://discord.gg/s5rSvB2'>
        <img className='discord' src={discord}/>
      </a>
      <a href='https://t.me/ValidityCrypto'>
        <img className='telegram' src={telegram}/>
      </a>
      <a href='https://www.github.com/ValidityCrypto'>
        <img className='github' src={github}/>
      </a>
      <a href='https://www.linkedin.com/company/validitycrypto'>
        <img className='linkedin' src={angellist}/>
      </a>
      <a href='https://www.linkedin.com/company/validitycrypto'>
        <img className='linkedin' src={linkedin}/>
      </a>
      <a href='https://twitter.com/ValidityCrypto'>
        <img className='twitter' src={twitter}/>
      </a>
      <a href='https://www.reddit.com/r/ValidityCrypto'>
        <img className='reddit' src={reddit}/>
      </a>
      <a href='https://www.facebook.com/ValidityCrypto'>
        <img className='facebook' src={facebook}/>
      </a>
      <a href='https://bitcointalk.org/index.php?topic=4900179'>
        <img className='bct' src={bct}/>
      </a>
    </div>
    )
  }

  revealBlanket = async() => {
    if(!this.state.blanketComponent) document.body.style.overflow = "hidden"
    else if(this.state.blanketComponent) document.body.style.overflow = "scroll"
    this.setState({
      blanketComponent: !this.state.blanketComponent
    });
  }

  renderSidebar = async() => {
    var targetElement = document.getElementsByClassName("sideBar")[0]
    if(!this.state.sideBar) targetElement.style.visibility = "visible"
    else if(this.state.sideBar) targetElement.style.visibility = "hidden"
    await this.setState({
      sideBar: !this.state.sideBar
    })
  }

  renderMobile = () => {
    return(
      <div className="socialButton">
        <Button appearance="help" onClick={this.revealBlanket}>
          Social
        </Button>
      </div>
    )
  }

  renderChart = () => {
    return(
      <PieChart
        animationDuration={1000}
        segmentsStyle={{ transition: 'stroke .3s' }}
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

  onMouseOut(e, d, i) {
    this.setState({
      metaData: {
        title: "Pick a chart value",
        value: " "
      },
      data:
      [{ title: 'Airdrop tier 1', value: 30, color: '#0cff6f' },
        { title: 'Airdrop tier 2', value: 20, color: '#0c23ff' },
        { title: 'Airdrop tier 3', value: 10, color: '#ff0c23' },
        { title: 'Team', value: 15, color: '#00bfff' },
        { title: 'Community fund', value: 20, color: '#815aff' },
        { title: 'Validation supply', value: 5, color: '#ff0c9c' }]
    });
  }

  onMouseOver(e, d, i) {
    var focusedData;
    const data = d.map((entry, index) => {
      if(index === i) focusedData = entry;
      return index === i ? entry.color = 'grey' : dataMock[index];
    });
    this.setState({
      metaData: focusedData,
      data: data,
    });
  }

  render() {
    const { isSubmitted } = this.state;
    const { isApply } = this.state;
    const { classes } = this.props;
    const { active } = this.state;
    const { isOpen } = this.state;
    return (
      <AtlaskitThemeProvider mode='light'>
        <div className="homepageMenu">
          <div className="menuBar">
            <AppBar fullWidth style={{ padding: this.state.menuPadding, height: this.state.menuHeight, backgroundColor: '#815aff', display: 'flex', zIndex: 1 }} position="static">
              <Toolbar>
                <a href='https://www.ethereum.org/'>
                  <img className='eth' src={eth}/>
                </a>
                  <Select
                    className="pageSelect"
                    onChange={this.scroll}
                    options={[
                      { label: 'What is Validity?', value: 'page1' },
                      { label: 'Communal Validation', value: 'page2' },
                      { label: 'How does it work?', value: 'page3' },
                      { label: 'Why use Validity?', value: 'page4' },
                      { label: 'Product', value: 'page5' },
                      { label: 'Tokenonomics', value: 'page6' },
                      { label: 'Resources', value: 'page7' },
                      { label: 'Validity core', value: 'page8' },
                      { label: 'Roadmap', value: 'page9' },
                      { label: 'Get involved', value: 'page10' },
                    ]}
                    placeholder="Navigation"/>
                {this.state.socialRender}
                <div className="landingButton">
                  <Button onClick={this.renderSidebar} appearance="help">Menu</Button>
                </div>
              </Toolbar>
            </AppBar>
          </div>
          <div className="sideBar">
            <Drawer
              variant="persistent"
              style={{ zIndex: -1}}
              classes={{ paper: classes.sideBar }}
              onClose={() => this.setState({ sideBar: false })}
              onOpen={() => this.setState({ sideBar: true })}
              open={this.state.sideBar}
              anchor="right">
                <Paper className="paperMenu" style={{ backgroundColor: fade('#ffffff', 0.275) }}>
                  <Button transperant className="paperButton">
                    <FontAwesomeIcon className="paperIcon" color="#ffffff" icon={faHome} size='lg'/>
                    <span style={{ color: 'white'}}>
                      Home
                    </span>
                  </Button>
                  <Button transperant className="paperButton">
                    <FontAwesomeIcon className="paperIcon" color="#ffffff" icon={faStarHalfAlt} size='lg'/>
                    <span style={{ color: 'white'}}>
                      MVP
                    </span>
                  </Button>
                  <Button onClick={this.reveal} transperant className="paperButton">
                    <FontAwesomeIcon className="paperIcon" color="#ffffff" icon={faParachuteBox} size='lg'/>
                    <span style={{ color: 'white'}}>
                      Airdrop
                    </span>
                  </Button>
                  <Button transperant className="paperButton">
                    <FontAwesomeIcon className="paperIcon" color="#ffffff" icon={faFileSignature} size='lg'/>
                    <span style={{ color: 'white'}}>
                      Survey
                    </span>
                  </Button>
                  <Button transperant className="paperButton">
                    <FontAwesomeIcon className="paperIcon" color="#ffffff" icon={faWallet} size='lg'/>
                    <span style={{ color: 'white'}}>
                      Wallet
                    </span>
                  </Button>
                </Paper>
            </Drawer>
          </div>
        </div>
        <div className="landingPage">
          <Page>
            <Grid layout="fluid">
              <GridColumn>
                <div className="landingBranding">
                  <img className='landingLogo' src={vldy}/>
                  <p className="landingTitle">Validity</p>
                </div>
              </GridColumn>
            </Grid>
          </Page>
        </div>
        <FlagGroup>
         {this.state.flags
           .map(flagId => {
           return (
            <AutoDismissFlag appearance='warning' id={flagId} key={flagId} icon={airdrop} title='Try out our MVP!' description='Easily engaging in the alpha form of delegation by using a interactive user interface, vote with a click and some easy mouse movements.'
             actions={[
               { content: 'Ignore', onClick: this.handleDismiss },
               { content: 'Apply', onClick: () => {
                 this.handleDismiss()
                  this.reveal() }}
              ]}
            />)}
          )}
        </FlagGroup>
        {isSubmitted && (
          <Modal actions = {[{ text: 'Dismiss', onClick: this.accept }  ]} onClose={this.accept} appearance='warning' heading='Submission Successful' width='500px'>
            You are now registered for the VLDY airdrop.
            <p className="warn"> For any queries or validating submissions contact airdrop@validity.ae </p>
            Thank you for participating and have a nice day!
          </Modal>
        )}
        {isOpen && (
          <Modal onClose={this.close} appearance='warning' heading='GDPR' width='500px'
          actions = {[
            { text: 'Accept', onClick: async() => {
              await this.close()
              await this.addFlag() }
            },
            { text: 'Refuse', onClick: this.close }
          ]}>
          We use cookies and other tracking technologies to improve your browsing experience on our web site,
          to show you personalized content and targeted ads, to analyze our website traffic, and to understand
          where our visitors are coming from. By browsing our website, you consent to our use of cookies and
          other tracking technologies.
          </Modal>
        )}
        {isApply && (
          <Modal heading='VLDY Airdrop Application' appearance='warning' scrollBehaviour="outside"
            actions = {[
              { text: 'Submit', onClick: this.addFlag  },
              { text: 'Refuse', onClick: this.submit },
              { text: 'Scroll to bottom', onClick: this.scrollToBottom }
            ]}>
              <div className="sect">
                  <div className="inpt">
                    <b><i>
                      <p className="warn">Closing Date: 20th of November 2018</p>
                      <p className="warn">DISCLAIMER: ALL PARAMETERS MUST BE CORRECT TO BE COMPLIANT OF THE AIRDROP DISTRIBUTION.</p>
                      <p className="warn">ANY INCORRECT INFORMATION WILL BE FOLLOWED UP AND IF NO SWIFT REPSONSE FROM THE APPLICANT THEY WILL BE EXCLUDED.</p></i></b>
                      <b>Your e-mail address</b>
                      <FieldText shouldFitContainer='true' label='E-Mail' required onChange={this.formEmail}/>
                      <FontAwesomeIcon className="ia" icon={faEnvelope} size='2x'/>
                      <b>Your Telegram account present in <a href="https://t.me/ValidityCrypto">@ValidityCrypto</a></b>
                      <FieldText shouldFitContainer='true' label='Telegram Username' required onChange={this.formTelegram}/>
                      <FontAwesomeIcon className="ia" icon={faTelegramPlane} size='2x'/>
                      <b ref={r => {this.bottomRef = r;}}>Your account present in the <a href="https://discord.gg/s5rSvB2">Validity Discord</a></b>
                      <FieldText shouldFitContainer='true' label='Discord Username' required onChange={this.formDiscord}/>
                      <FontAwesomeIcon className="ia" icon={faDiscord} size='2x'/>
                      <b>Your Twitter account that is following <a href="https://twitter.com/ValidityCrypto">@ValidityCrypto</a></b>
                      <FieldText shouldFitContainer='true' label='Twitter Username' required onChange={this.formTwitter}/>
                      <FontAwesomeIcon className="ia" icon={faTwitter} size='2x'/>
                      <b>Your facebook account that has liked <a href="https://www.facebook.com/ValidityCrypto/">Validity's facebook</a></b>
                      <FieldText shouldFitContainer='true' label='Facebook Username' required onChange={this.formFacebook}/>
                      <FontAwesomeIcon className="ia" icon={faFacebook} size='2x'/>
                      <b>Target <a href="https://www.myetherwallet.com">Ethereum wallet address</a> for the airdrop distribution</b>
                      <FieldText shouldFitContainer='true' label='Ethereum Address' required onChange={this.formWallet}/>
                      <FontAwesomeIcon className="ia" icon={faWallet} size='2x'/>
                  </div>
              </div>
         </Modal>
        )}
        {this.state.blanketComponent && (
          <div className="socialModal" onClick={this.revealBlanket}>
          <a href='https://discord.gg/s5rSvB2'>
            <img className='discord' src={discord}/>
          </a>
          <a href='https://t.me/ValidityCrypto'>
            <img className='telegram' src={telegram}/>
          </a>
          <a href='https://www.github.com/ValidityCrypto'>
            <img className='github' src={github}/>
          </a>
          <a href='https://www.linkedin.com/company/validitycrypto'>
            <img className='linkedin' src={angellist}/>
          </a>
          <a href='https://www.linkedin.com/company/validitycrypto'>
            <img className='linkedin' src={linkedin}/>
          </a>
          <a href='https://twitter.com/ValidityCrypto'>
            <img className='twitter' src={twitter}/>
          </a>
          <a href='https://www.facebook.com/ValidityCrypto'>
            <img className='facebook' src={facebook}/>
          </a>
          <a href='https://bitcointalk.org/index.php?topic=4900179'>
            <img className='bct' src={bct}/>
          </a>
         </div>
        )}
         <div className="page1">
          <Page>
            <Grid layout="fluid">
              <GridColumn>
              <div className="page1-body">
                <div className="h1">
                  <FontAwesomeIcon icon={faLayerGroup} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;What is Validity?
                </div>
                <p className="pagePoint">Cryptocurriencies are blockchain technology have been depicted in many different frames of light, with this, there is a huge lack of underlying acknowledgement of the technology within. </p>
                <p className="pagePoint">The general sentiment of the capabilities of profit-making in this field distort the true integrity of these permissionless currencies and projects but more importantly the peoples aim behind them. </p>
                <p className="pagePoint">In 2017, 81% of all ICO's resulted in unfavourable situations for investors, some of which were caused by hacks and others were scams. </p>
                <p className="pagePoint">Validity is a communally verifiable platform for investors to contribute their general perspectives regarding currencies, tokens and projects alike.  </p>
              </div>
              </GridColumn>
              <GridColumn>
              <div className="validatingGraphic">
                <img className="base1" src={base1}/>
                <div className="lines1edit"><img className="lines1" src={lines1}/></div>
                <div className="wrong"><FontAwesomeIcon icon={faTimes}/></div>
                <div className="right"><FontAwesomeIcon icon={faCheck}/></div>
                <div><img className="bcc" src={bcc}/></div>
                <div className="messages1edit"><img className="messages1" src={messages1}/> </div>

              </div>
              </GridColumn>
            </Grid>
          </Page>
        </div>
        <div className="page2">
          <Page>
            <Grid layout="fluid">
              <GridColumn>
                <div className="pageBody">
                  <div className="h2">
                    <FontAwesomeIcon icon={faStreetView} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Communal Validation
                  </div>
                  <div className="codecommunal">
                  <b>Communal Validation;</b> <i>Peer production is based on equipotential participation, i.e. the a priori self-selection of participants, and the communal vetting of the quality of their work in the process of production itself;</i>
                  </div>
                  <div className="traits">
                    <div className="traitPoint"><FontAwesomeIcon icon={faLink} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Self-governing</div>
                    <div className="traitPoint"><FontAwesomeIcon icon={faShieldAlt} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Sybil-proof</div>
                    <div className="traitPoint"><FontAwesomeIcon icon={faDove} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Pure</div>
                  </div>
                </div>
              </GridColumn>
              <GridColumn>
                <img className="world" src={world}/>
              </GridColumn>
            </Grid>
          </Page>
      </div>
      <div className="page3">
        <Page>
          <Grid layout="fluid">
            <GridColumn>
              <div className="pageBody">
              <div className="h3">
                <FontAwesomeIcon icon={faSitemap} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;How does it work?
              </div>
              <p className="stageOne">
                <div className="stageNumber">1</div>
                <div className="stageText">
                  A poll is created for delegating a subject of 5 projects by demand and request, the winning entity is then confirmed for the validation process.
                </div>
              </p>
              <p className="stageTwo">
                <div className="stageNumber">2</div>
                <div className="stageText">
                  An intrinsic analysis and due-dillegence is executed upon the entities employee's, product and ultimately it's integrity.
                </div>
              </p>
              <p className="stageThree">
                <div className="stageNumber">3</div>
                <div className="stageText">
                  The investigation is then distributely proposed to validitors, in order to create a non-bias form of verification via communal validation.
                </div>
              </p>
              <p className="stageFour">
                <div className="stageNumber">4</div>
                <div className="stageText">
                 Validators engage in a interactive voting process using Validity's unique UX, to express their outlook on the project via three options; positive, neutral or negative
                </div>
              </p>
              <p className="stageFive">
                <div className="stageNumber">5</div>
                <div className="stageText">
                  The concluding results are combined and are quantified out of a rating of 10, the distributed analysis then acts as a source of evaluation for future onlooking investors.
                </div>
              </p>
              </div>
            </GridColumn>
         </Grid>
        </Page>
      </div>
      <div className="page4">
        <Page>
          <Grid layout="fluid">
            <GridColumn>
              <div className="pageBody">
                <div className="h4">
                  <FontAwesomeIcon icon={faUsers} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Why use Validity?
                </div>
                <img className="daoGraphic" src={dao}/>
                <p className="traitOne">
                  <div className="stageIcon"><FontAwesomeIcon icon={faFingerprint} color='#815aff' size='xs'/></div>
                  <div className="stageAlpha">
                    vID's <i>(Validation Indentifiers)</i> are a form of <b><i>self-sovereign</i></b> identities and are unique to each voter.
                  </div>
                </p>
                <p className="traitTwo">
                  <div className="stageIcon"><FontAwesomeIcon icon={faShieldAlt} color='#815aff' size='xs'/></div>
                  <div className="stageAlpha">
                    The <b><i>ERC20d</i></b> token staking allocates sybil attack immunity to validations, allowing pure results to blossom.
                  </div>
                </p>
                <p className="traitThree">
                  <div className="stageIcon"><FontAwesomeIcon icon={faStar} color='#815aff' size='xs'/></div>
                  <div className="stageAlt" >
                    Validators are rewarded in VLDY tokens for participating, creating an incentive to vote.
                  </div>
                </p>
                <p className="traitFour">
                  <div className="stageIcon"><FontAwesomeIcon icon={faCrosshairs} color='#815aff' size='xs'/></div>
                  <div className="stageAlt" >
                    Make the crypto-sphere a safer place for everyone, by helping filter out the bad projects from the good.
                  </div>
                </p>
                <p className="traitFive">
                  <div className="stageIcon"><FontAwesomeIcon icon={faInfinity} color='#815aff' size='xs'/></div>
                  <div className="stageAlt" >
                    The validation data is utilised to create a public ledger of qualitative crypto-currency <b><i>ratings</i></b>.
                  </div>
                </p>
                <p className="traitSix">
                  <div className="stageIcon"><FontAwesomeIcon icon={faGem} color='#815aff' size='xs'/></div>
                  <div className="stageAlpha" >
                    Validity is <b><i>decentrilised autonomous organisation</i></b>, meaning power to the people.
                  </div>
                </p>
              </div>
            </GridColumn>
          </Grid>
        </Page>
      </div>
      <div className="page5">
        <Page>
        <Grid layout="fluid">
          <GridColumn>
            <div className="pageBody">
              <div className="h5">
                <FontAwesomeIcon icon={faCode} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Product
              </div>
              <img className="desktopProduct" src={productPreview}/>
              <i className="productTagline">A portfolio tracker you can trust...</i>
            </div>
          </GridColumn>
         </Grid>
        </Page>
      </div>
      <div className="page6" onMouseOver={() => this.setState({ chartComponent: this.renderChart() })}>
        <Page>
          <Grid layout="fluid">
            <GridColumn>
            <div className="pageBody">
              <div className="h4">
                <FontAwesomeIcon icon={faUsers} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Tokeneconomics
              </div>
              <div className="tokenChart">
                {this.state.chartComponent}
                </div>
                {this.state.metaData.value != false && (
                  <div className="modalToken">
                    <SectionMessage appearance="change">
                      <p>{this.state.metaData.title}: {this.state.metaData.value}%</p>
                    </SectionMessage>
                  </div>
                )}
                <p className="tokenOne">
                  <FontAwesomeIcon icon={faShareAlt} color='#815aff' size='lg'/>&nbsp;&nbsp;&nbsp;
                  <i>Address: <b>0xafc2f2d803479a2af3a72022d54cc0901a0ec0d6</b></i>
                </p>
                <p className="tokenTwo">
                  <i>Supply: <b>50,600,000,000</b></i>
                  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faStarHalfAlt} color='#815aff' size='lg'/>
                </p>
                <p className="tokenThree">
                  <i>Network: <b>Ethereum</b></i>
                  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSitemap} color='#815aff' size='lg'/>
                </p>
                <p className="tokenFour">
                  <i>Token: <b>ERC20d</b></i>
                  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTag} color='#815aff' size='lg'/>
                </p>
                <p className="tokenFive">
                  <i>Ticker: <b>VLDY</b></i>
                  &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faMedal} color='#815aff' size='lg'/>
                </p>
              </div>
            </GridColumn>
          </Grid>
        </Page>
      </div>
      <div className="page7">
        <Page>
        <Grid layout="fluid">
          <GridColumn>
            <div className="pageBody">
              <div className="h5">
                <FontAwesomeIcon icon={faBook} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Resources
              </div>
              <a className="resourceOne" href='https://medium.com/@samuel.jj.gosling/what-is-communal-validation-and-why-does-it-matter-8634dcba2133'>
                <div className="resourceIcon"><FontAwesomeIcon icon={faMugHot} color='#815aff' size='s'/></div>
                <div className="resourceText" >
                What is Communal Validation & why does it matter?
                </div>
              </a>
              <a className="resourceTwo" href='https://medium.com/coinmonks/cryptocurrency-and-blockchain-red-flags-e0ba71885136'>
                <div className="resourceIcon" href=''><FontAwesomeIcon icon={faCrosshairs} color='#815aff' size='s'/></div>
                <div className="resourceText" >
                Cryptocurrency & Blockchain red flags
                </div>
              </a>
              <a className="resourceThree" href='https://github.com/validitycrypto/validity-hybrid-tipbot'>
                <div className="resourceIcon"><FontAwesomeIcon icon={faDiscord} color='#815aff' size='s'/></div>
                <div className="resourceText" href=''>
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
          <Grid layout="fluid">
            <GridColumn>
              <div className="teamBody">
                <div className="h4">
                  <FontAwesomeIcon icon={faUsers} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Validity core
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
            <Grid layout="fluid">
              <GridColumn>
                <div className="pageBody">
                  <div className="h5">
                    <FontAwesomeIcon icon={faStar} color='#815aff' size='s'/>&nbsp;&nbsp;&nbsp;Roadmap
                  </div>
                  <div className="roadmapOne"
                    onMouseOver={() => this.setState({ stageModal: 1})}
                    onMouseOut={() => this.setState({ stageModal: 0})}>
                    <img className="circleRoadmap" src={greenCircle} />
                    <img className="logoOne" src={eth} />
                  </div>
                  {(this.state.stageModal == 1 || window.screen.width < 600 || window.screen.height == 1024 && window.screen.width == 768 || window.screen.height == 1366 && window.screen.width == 1024 ) && (
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
                    <img className="circleRoadmap" src={redCircle} />
                    <FontAwesomeIcon className="logoThree" icon={faFileMedicalAlt} color='#815aff' size='2x'/>
                  </div>
                  {(this.state.stageModal == 2 || window.screen.width < 600 || window.screen.height == 1024 && window.screen.width == 768 || window.screen.height == 1366 && window.screen.width == 1024 ) && (
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
                    <img className="circleRoadmap" src={redCircle} />
                    <img className="logoTwo" src={gitcoin} />
                  </div>
                  {(this.state.stageModal == 3 || window.screen.width < 600 || window.screen.height == 1024 && window.screen.width == 768 || window.screen.height == 1366 && window.screen.width == 1024  ) && (
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
                    <img className="circleRoadmap" src={redCircle} />
                    <FontAwesomeIcon className="logoThree" icon={faCoffee} color='#815aff' size='2x'/>
                  </div>
                  {(this.state.stageModal == 4 || window.screen.width < 600 || window.screen.height == 1024 && window.screen.width == 768 || window.screen.height == 1366 && window.screen.width == 1024 ) && (
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
                    <img className="circleRoadmap" src={redCircle} />
                    <FontAwesomeIcon className="logoThree" icon={faCodeBranch} color='#815aff' size='2x'/>
                  </div>
                  {(this.state.stageModal == 5 || window.screen.width < 600 || window.screen.height == 1024 && window.screen.width == 768 || window.screen.height == 1366 && window.screen.width == 1024 ) && (
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
                    <img className="circleRoadmap" src={redCircle} />
                    <FontAwesomeIcon className="logoThree" icon={faRocket} color='#815aff' size='2x'/>
                  </div>
                  {(this.state.stageModal == 6 || window.screen.width < 600 || window.screen.height == 1024 && window.screen.width == 768 || window.screen.height == 1366 && window.screen.width == 1024 ) && (
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
            <Grid layout="fluid">
              <GridColumn>
                <div className="pageBody">
                  <div className="h3">
                    <FontAwesomeIcon icon={faFemale} color='#815aff' size='xs'/>&nbsp;
                    <FontAwesomeIcon icon={faMale} color='#815aff' size='xs'/>&nbsp;&nbsp;&nbsp;Get involved
                  </div>
                  <div className="ethereumWrapper"><img className="ethereumLogo" src={outlineEth}/></div>
                  <Paper className="teamOnboarding">
                    <p>Do you think you have what it takes to join our team? We are looking for innovational and committed people to help make Validity a reality. The onboarding process for one to become appicable requires a face to face interview with our founder. If you are interested please send your resume and a short bio to:</p>
                    <br></br><p><b><i>team@validity.ae</i></b></p>
                  </Paper>
                  <Paper className="desiredTraits">
                   <p><b><i>We are looking for...</i></b></p>
                   <br></br><p><FontAwesomeIcon icon={faEthereum} color='#815aff' size='s'/>&nbsp;Solidity developers (WASM)</p>
                   <br></br><p><FontAwesomeIcon icon={faPython} color='#815aff' size='s'/>&nbsp;Python developers (ML)</p>
                   <br></br><p><FontAwesomeIcon icon={faReact} color='#815aff' size='s'/>&nbsp;React.js developers </p>
                   <br></br><p><FontAwesomeIcon icon={faPaintBrush} color='#815aff' size='s'/>&nbsp; UX/UI designer </p>
                   <br></br><p><FontAwesomeIcon icon={faFire} color='#815aff' size='s'/>&nbsp;Growth hackers </p>
                  </Paper>
                </div>
              </GridColumn>
            </Grid>
          </Page>
        </div>
      </AtlaskitThemeProvider>
    );
  }
}

Home.propTypes = {
  data: dataPropType,
};

export default withStyles(styles)(Home);
