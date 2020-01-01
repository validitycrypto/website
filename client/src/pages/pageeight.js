import React, { Component } from "react";

import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Page, { Grid, GridColumn } from "@atlaskit/page"

import TeamCard from "../components/teamcard"

import gozzy from "../assets/images/gozzy.png"

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
                  <FontAwesomeIcon icon={faUsers} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Team
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
              </div>
            </GridColumn>
          </Grid>
        </Page>
      </div>
    )
  }
}

export default PageEight;
