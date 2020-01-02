import React, { Component } from "react"
import styled from 'styled-components';

import { PURPLE_PRIMARY } from '../constants/palette';
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import { faLeaf, faBullhorn, faEnvelope } from"@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterBase = styled.footer`
  -webkit-box-shadow: -1px 0px 15px -3px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 0px 15px -3px rgba(0, 0, 0, 0.75);
  background: ${PURPLE_PRIMARY};
  display: inline-block;
  color: white;
  height: auto;
  width: 100em;
  padding: 2.5vw;
`

export default class Footer extends Component {

  render() {
    return(
  <FooterBase className="pageFooter">
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
    <p>© Validity 2020. All rights reserved.</p>
  </div>
 </FooterBase>
  )
 }
}
