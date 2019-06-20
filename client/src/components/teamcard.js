import React, { Fragment, Component } from "react";

import { faTelegramPlane, faDiscord, faLinkedin, faGithub, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, Image } from "semantic-ui-react"

class TeamCard extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
 }

  render() {
    return(
      <Card className={this.props.data.class} inverted="true">
        <Image className="teamPhoto" src={this.props.data.image}/>
        <Card.Content>
          <Card.Header><span className="blackt">{this.props.data.name}</span></Card.Header>
            <Card.Meta>
              <span className="blackt">{this.props.data.position}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <span className="blackt">{this.props.data.nationality}</span>
          </Card.Content>
          <Card.Content extra>
          <a className="socialLink" href={this.props.data.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} color="white" />
          </a>
          <a className="socialLink" href={this.props.data.twitter}>
            <FontAwesomeIcon icon={faTwitter} color="white" />
          </a>
          <a className="socialLink" href={this.props.data.discord}>
            <FontAwesomeIcon icon={faDiscord} color="white" />
          </a>
          <a className="socialLink" href={this.props.data.telegram}>
            <FontAwesomeIcon icon={faTelegramPlane} color="white" />
          </a>
          {this.props.data.github !== false && (
            <a className="socialLink" href={this.props.data.github}>
              <FontAwesomeIcon icon={faGithub} color="white"/>
            </a>
          )}
        </Card.Content>
      </Card>
    )
  }
}

export default TeamCard;
