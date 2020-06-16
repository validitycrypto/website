import React, { Component } from 'react'
import { AutoDismissFlag, FlagGroup } from '@atlaskit/flag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt } from'@fortawesome/free-solid-svg-icons'

const modalIcon = <FontAwesomeIcon color='#ffffff' icon={faStarHalfAlt} size='lg'/>

export default class Alert extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { flags, handleEnquire, handleDismiss } = this.props;

    return (
      <FlagGroup>
       {flags.map(flagId => {
         return (
          <AutoDismissFlag appearance='info' id={flagId} key={flagId} icon={modalIcon} title='Validity MVP' description='Voting has never been such a breeze, drag and drop to vote on-chain.'
           actions={[
             { content: 'Launch', onClick: handleEnquire },
             { content: 'Dismiss', onClick: handleDismiss }
            ]}
          />)}
        )}
      </FlagGroup>
    )
  }
}
