import React, { Component, Fragment } from 'react'
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import { firebaseConfiguration } from './utils/firebaseConfig';
import getWeb3 from './utils/getWeb3'
import firebase from 'firebase'
import ReactGA from 'react-ga'

// UX
  // Atlaskit
import { AtlaskitThemeProvider } from '@atlaskit/theme'
import Button from '@atlaskit/button'
import Select from '@atlaskit/select'

  // MatieralUI
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';

  // Misc
import { Loader } from 'react-loaders'

// Constants
import { GREEN_PRIMARY, GREEN_SECONDARY } from './constants/palette';
import { delay } from './constants/functions'

// CSS
import './assets/css/fonts/raleigh.css'
import './assets/css/fonts/apple-sf.css'
import './assets/css/index.css'
import './assets/css/native.css'
import 'loaders.css'

import Airdrop from './forms/airdrop'
import Survey from './forms/survey'

import Landing from './pages/landing'

import Blanket from './components/blanket'

class Aeon extends Component {
  constructor(props) {
    super(props)
      this.state = {
        blanketComponent: false,
        sideBar: false,
        flags: [],
      }
  }

  componentWillMount = async() => {
    window.dispatch = this.props.dispatch;
    window.store = this.context.store;

    const firebaseDb = firebase.initializeApp(firebaseConfiguration('mvp'))
    await this.resizeEvent().then(() => this.setState({ isOpen: true }))
    window.addEventListener('resize', this.resizeEvent)
    ReactGA.initialize('UA-145604831-2');
    await this.setState({
      firebase: firebaseDb.firestore()
    }); await delay(5000);
    await this.setState({
      pageLoad: true
    });
  }

  initialiseWeb3 = async(state) => {
    const web3 = await getWeb3();
    await window.dispatch();

    if(web3){
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      await window.dispatch();
    }
  }

  resizeEvent = async() => {
    if(this.props.location.pathname !== "/mvp"){
        if( (window.screen.width === 768 && window.screen.height < 1100 )
        || (window.screen.height > 1250 && window.screen.height < 1375
            && window.screen.width > 1000 && window.screen.width < 1150)
        || (window.screen.width < 600) ){
            await this.setState({
              socialRender: this.renderMobile(),
              menuPadding: '2.5vw',
              menuHeight: '10%'
            })
        } else if(window.screen.height > 1000 && window.screen.width > 1900) {
              await this.setState({
                socialRender: this.renderDesktop(),
                menuPadding: '.5vw',
                menuHeight: '7.5%'
          })
        } else  {
            await this.setState({
              socialRender: this.renderDesktop(),
              menuPadding: '0vw',
              menuHeight: '10%'
          })
        }
        await this.setState({
          toolbarComponents: this.renderLanding()
        })
    } else if(this.props.location.pathname === "/mvp") {
      await this.setState({
        toolbarComponents: this.renderProduct(),
        menuPadding: '0vw',
        menuHeight: '10%'
      });
    }
  }

  handleEnquire = async() => {
    await this.removeFlag().then(this.triggerMvp());
    await this.toggleHide(this.state.sideBar);
    await this.setState({ sideBar: false });
    ReactGA.event({
     category: 'Notification',
     action: 'Landing',
     label: 'True',
   })
  }

  handleDismiss = async() => {
    await this.removeFlag();
    ReactGA.event({
      category: 'Navigation',
      action: 'Landing',
      label: 'False',
     });
  }

  removeFlag = async() => {
    await this.setState(prevState => ({
      flags: prevState.flags.slice(1),
    }));
  }

  triggerMvp = async() => {
   if(window.screen.height > 1000 && window.screen.width > 1900) {
     this.setState({ menuPadding: '0vw' });
   } await this.renderSidebar().then(() =>
        this.setState({
          toolbarComponents: this.renderProduct()
       })
     ); await this.scrollTop()
  }

  triggerSubmit = async(key) => {
    this.setState({
      [key]: !this.state.key
    }, this.scrollTop);
  }

  addFlag = () => {
    const newFlagId = this.state.flags.length + 1;
    const flags = this.state.flags.slice();
    flags.splice(0, 0, newFlagId);
    this.setState({ flags });
  }

  scroll = (event) => {
    var element = document.getElementsByClassName(event.value)[0]
    element.scrollIntoView({ behavior: 'smooth' });
  }

  renderDesktop = () => {
    return(
      <div />
    )
  }

  revealBlanket = async() => {
    if(!this.state.blanketComponent) document.body.style.overflow = 'hidden'
    else if(this.state.blanketComponent) document.body.style.overflow = ''
    this.setState({
      blanketComponent: !this.state.blanketComponent
    });
  }

  renderSidebar = async() => {
    await this.toggleHide(this.state.sideBar);
    await this.setState({
      sideBar: !this.state.sideBar
    });
  }

  toggleHide = async(_value) => {
    var targetElement = document.getElementsByClassName('sideBar')[0]
    if(!_value) targetElement.style.visibility = 'visible'
    else if(_value) targetElement.style.visibility = 'hidden'
  }

  renderLanding = () => {
    return(
      <Fragment>
        {this.state.socialRender}
      </Fragment>
    );
  }

  renderMobile = () => {
    return(
      <div className='socialButton'>
        <Button appearance='help' onClick={this.revealBlanket}>
          Social
        </Button>
      </div>
    )
  }

  renderProduct = () => {
    return(
      <Fragment>
      <Link to='/' onClick={this.renderHomepage}>
      </Link>
      <div style={{ height: '6.75vh'}}/>
      </Fragment>
    )
  }

  renderHomepage = async() => {
    await this.toggleHide(true);

    if(window.screen.height > 1000 && window.screen.width > 1900) {
      this.setState({
       menuPadding: '.5vw',
     });
   }

    await this.setState({
      toolbarComponents: this.renderLanding(),
      sideBar: false
    }, this.scrollTop);
  }

  scrollTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  acceptGDPR = async() => {
    ReactGA.event({
     category: 'Notification',
     action: 'GDPR',
     label: 'True',
   }); await delay(10000);
    this.removeFlag();
  }

  refuseGDPR = async() => {
    await this.setState({ isOpen: false});
    ReactGA.event({
      category: 'Notification',
      action: 'GDPR',
      label: 'False',
   });
 }

 socialTrigger = (_event) => {
   ReactGA.event({
    category: 'Navigation',
    action: 'Social',
    label: _event.target.name,
    });
  }

  render() {
    const { airdrop, survey } = this.state;
    const { classes } = this.props;

    if(!this.state.pageLoad){
      return(
        <Fragment>
          <div className='loadingModal'>
            <Loader size='Large' color={GREEN_SECONDARY} type='ball-triangle-path' active />
           </div>
        </Fragment>
      );
   } else {
     return (
     <Fragment>
        <AtlaskitThemeProvider theme='light'>
          <Switch>
            <Route path='/airdrop'>
              <Airdrop submitState={airdrop} triggerSubmit={this.triggerSubmit}/>
            </Route>
            <Route path='/survey'>
              <Survey submitState={survey} triggerSubmit={this.triggerSubmit}/>
            </Route>
            <Route exact path='/'>
              <Landing />
            </Route>
          </Switch>
        </AtlaskitThemeProvider>
      </Fragment>
    );
    }
  }
}

Aeon = withRouter(Aeon);

export default Aeon;
