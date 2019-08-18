import React, { Component } from "react"
import ReactGA from "react-ga";

import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import { faLeaf, faBullhorn, faEnvelope } from"@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Footer from "../components/footer"

import Landing from "../pages/landing"
import PageOne from "../pages/pageone"
import PageTwo from "../pages/pagetwo"
import PageThree from "../pages/pagethree"
import PageFour from "../pages/pagefour"
import PageFive from "../pages/pagefive"
import PageSix from "../pages/pagesix"
import PageSeven from "../pages/pageseven"
import PageEight from "../pages/pageeight"
import PageNine from "../pages/pagenine"
import PageTen from "../pages/pageten"

// Images

class Home extends Component {
  constructor(props) {
    super(props)
      this.state = {

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

      componentWillMount = () => {
        ReactGA.pageview('/Home');
      }

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


 render() {
  return (
    <div className="homeNavigation">
      <Landing/>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
      <PageFive/>
      <PageSix />
      <PageSeven/>
      <PageEight/>
      <PageNine/>
      <PageTen/>
      <Footer className="pageFooter">
      <div className="footerContact">
        <p>
          <a style={{color: 'white'}} href="mailto:airdrop@vldy.org" target="_blank">
            <FontAwesomeIcon color="#bda8ff" icon={faEnvelope} size="lg"/>&nbsp;&nbsp;&nbsp;airdrop@vldy.org
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a style={{color: 'white'}} href="mailto:team@vldy.org" target="_blank">
           <FontAwesomeIcon color="#bda8ff" icon={faEnvelope} size="lg"/>
           &nbsp;&nbsp;&nbsp;team@vldy.org
        </a>
       </p>
       <br></br>
       <p>
        <a style={{color: 'white'}} href="https://t.me/ValiditySupport" target="_blank">
          <FontAwesomeIcon color="#bda8ff" icon={faTelegramPlane} size="lg"/>
          &nbsp;&nbsp;&nbsp;@ValiditySupport
        </a>
       </p>
      </div>
      <div className="footerRights">
        <p>© Validity 2019. All rights reserved.</p>
      </div>
     </Footer>
    </div>
    )
  }
}

export default Home;
