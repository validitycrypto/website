import React, { Component, Fragment } from 'react'
import Modal from '@atlaskit/modal-dialog'

export default class GDPR extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isOpen, acceptGDPR, refuseGDPR } = this.props;

    if(isOpen){
      return (
        <Modal appearance='warning' heading='GDPR' width='500px'
        actions = {[
          { text: 'Accept', onClick: acceptGDPR },
          { text: 'Refuse', onClick: refuseGDPR }
        ]}>
        We use cookies and other tracking technologies to improve your browsing experience on our web site,
        to show you personalized content and targeted ads, to analyze our website traffic, and to understand
        where our visitors are coming from. By browsing our website, you consent to our use of cookies and
        other tracking technologies.
        </Modal>
      )
    } else {
      return(
        <Fragment />
      )
    }
  }
}
