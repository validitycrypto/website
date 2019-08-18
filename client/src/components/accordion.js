import React, { Component } from 'react'
import { Accordion, Icon, Segment } from 'semantic-ui-react'

export default class AccordionModal extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Segment inverted className="accordionComponent">
        <Accordion inverted>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Will Validity ever have an ICO?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
          No. We believe trust is not a purchasable trait, it needs to be exemplified through creating intrinsic value. Forming a viable and proactive community is difficult and since general sentiments and participation of cryptocurrency consumers is low, Validity aims to incentivise a leverageable stance on governance not skewed by any large financial entities.
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Where can I view asset quantifications?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            Unfortunately, our portfolio tracker and delegation infrastructure is yet to be developed.
            Whilst you wait you can try out MVP, which has an intuitive voting process that is surmountable for any individual to engage in. One can navigate to it by using the sidebar.
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Where can I report a scam or supicion?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            We would love to hear any experiences you may have faced and for your time you will be rewarded in VLDY tokens, just toggle our survey in the sidebar and provide the requested information to be eligible.
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What makes VLDY tokens important?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            The VLDY token gives users to power partake in validations by staking their tokens to prevent Sybil attacks and in the process earn rewards. Involvement in these events allows one to gather delegation statistics associated with their ValidityID, which in turn gains acclamation based on attributes such as, commitment, accuracy and staking weight.
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How can I get VLDY tokens?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            You can apply for one of our many airdrops using the sidebar menu, over 60% of the supply is
            allocated for anyone to claim, this provides a uniform distribution optimal for voting.

            We are not enlisted to any exchanges at this time.
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Where can I store my tokens?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
          You can use any compatible ERC20 wallet like Metamask or MyEtherWallet, you can then provide
          the token details found on our tokeneconomics page to verify your balances.
          </Accordion.Content>
        </Accordion>
      </Segment>
    )
  }
}
