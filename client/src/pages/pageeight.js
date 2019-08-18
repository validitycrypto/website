import React, { Component } from "react";

import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

import TeamCard from "../components/teamcard"

import marcos from "../assets/images/marcos.png"
import gozzy from "../assets/images/gozzy.png"
import lukas from "../assets/images/lukas.png"

class PageEight extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
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
                  twitter: "https://twitter.com/xgozzy",
                  telegram: "https://t.me/xgozzy",
                  linkedin: "https://www.linkedin.com/in/samuel-jj-gosling/",
                  discord: "https://discordapp.com/users/359835946491052037/",
                  github: "https://github.com/samgos"
                }}/>
                <TeamCard data={{
                  class: "cardTwo",
                  name: "Marcos B Rubianes",
                  image: marcos,
                  position: "Strategist",
                  nationality: "Switzerland 🇨🇭",
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
    )
  }
}

export default PageEight;
