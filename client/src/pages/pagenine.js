import React, { Component } from "react";

import { faCoffee, faCodeBranch, faFileMedicalAlt, faStarHalfAlt, faRocket, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SectionMessage from "@atlaskit/section-message"
import Grid from '@material-ui/core/Grid';
import Page from "@atlaskit/page"

import greenCircle from "../assets/images/green-circle.png"
import redCircle from "../assets/images/red-circle.png"
import gitcoin from "../assets/images/gitcoin.png"
import eth from "../assets/images/ethereum.png"

class PageNine extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
   }

  render() {
    return(
      <div className="page9">
        <Page>
          <Grid container direction="column" justify='strech'>
            <Grid item>
              <div className="h5">
                <FontAwesomeIcon icon={faMapMarkedAlt} color="#815aff" size="sm"/>&nbsp;&nbsp;&nbsp;Roadmap
              </div>
            </Grid>
            <Grid item container direction='row' justify='space-between' alignItems='center'>
              <Grid item>
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
              </Grid>
              <Grid item>
                <div className="roadmapTwo"
                  onMouseOver={() => this.setState({ stageModal: 2})}
                  onMouseOut={() => this.setState({ stageModal: 0})}>
                  <img alt="circleRoadmap" className="circleRoadmap" src={redCircle} />
                  <img alt="logoTwo" className="logoTwo" src={gitcoin} />
                </div>

                {((this.state.stageModal === 2) || (window.screen.width < 600) || (window.screen.height === 1024 && window.screen.width === 768) || (window.screen.height === 1366 && window.screen.width === 1024 )) && (
                  <div className="modalTwo">
                    <SectionMessage appearance="error">
                      Gitcoin grants & funding
                    </SectionMessage>
                  </div>
                )}

                <div className="lineTwo"/>
              </Grid>
              <Grid item>
                <div className="roadmapThree"
                  onMouseOver={() => this.setState({ stageModal: 3})}
                  onMouseOut={() => this.setState({ stageModal: 0})}>
                  <img alt="circleRoadmap" className="circleRoadmap" src={redCircle} />
                  <FontAwesomeIcon className="logoThree" icon={faFileMedicalAlt} color="#815aff" size="2x"/>
                </div>

                {((this.state.stageModal === 3) || (window.screen.width < 600) || (window.screen.height === 1024 && window.screen.width === 768) || (window.screen.height === 1366 && window.screen.width === 1024 )) && (
                  <div className="modalThree">
                    <SectionMessage appearance="error">
                      Validity Whitepaper
                    </SectionMessage>
                  </div>
                )}

                <div className="lineThree"/>
              </Grid>
            </Grid>

            <Grid item container direction='row' justify='space-between' alignItems='center'>
              <Grid item>
                <div className="roadmapFour"
                  onMouseOver={() => this.setState({ stageModal: 4})}
                  onMouseOut={() => this.setState({ stageModal: 0})}>
                  <img alt="circleRoadmap" className="circleRoadmap" src={redCircle} />
                  <FontAwesomeIcon className="logoThree" icon={faCoffee} color="#815aff" size="2x"/>
                </div>

                {((this.state.stageModal === 4) || (window.screen.width < 600) || (window.screen.height === 1024 && window.screen.width === 768) || (window.screen.height === 1366 && window.screen.width === 1024 )) && (
                  <div className="modalFour">
                    <SectionMessage appearance="error">
                      Find talent & partnerships
                    </SectionMessage>
                  </div>
                )}

                <div className="lineFour"/>
              </Grid>
              <Grid item>
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

              </Grid>
              <Grid item>
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

                <div className="lineFive"/>
              </Grid>
            </Grid>
          </Grid>
        </Page>
      </div>
    )
  }
}

export default PageNine;
