import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Page  from "@atlaskit/page";
import vldy from "../assets/images/vldy.png"
import Grid from '@material-ui/core/Grid';
import Social from "../components/social"

class Landing extends Component {
  constructor(props){
      super(props)
      this.state = {}
   }

  render() {
    return(
      <div className="landingPage">
        <Page>
          <Grid container direction="column" justify='flex-start' alignItems='center'>
            <div className="landingBranding">
              <Grid item container direction="row" justify='center' alignItems='center'>
                <Grid item>
                  <img alt="landingLogo" className="landingLogo" src={vldy}/>
                </Grid>
                <Grid item>
                  <label className="landingTitle">Validity</label>
                </Grid>
              </Grid>
            </div>
            <Grid item>
              <div className="siteNotice">
                <p className="noticeTitle"> We are busy building, come back soon! </p>
                <br></br> While you wait...
                <ul className="noticeHrefs">
                  <li> <a href='https://uniswap.exchange/swap/0x904da022abcf44eba68d4255914141298a7f7307' target="_blank"> Trade </a> </li>
                  <li> <Link to='/airdrop'> Airdrop </Link> </li>
                  <li> <a href={`${window.location.pathname}lightpaper.pdf`} target="_blank"> Lightpaper </a> </li>
                  <li> <Link to='/survey'> Survey </Link> </li>
                  <li> <a href='https://gitcoin.co/grants/186/validity' target="_blank"> Support </a> </li>
                </ul>
              </div>
              <Social />
            </Grid>
          </Grid>
        </Page>
      </div>
    )
  }
}

export default Landing;
