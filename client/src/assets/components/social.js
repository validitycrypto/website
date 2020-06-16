import React, { Component, Fragment } from 'react'

import angellist from '../images/angellist.png'
import telegram from '../images/telegram.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import discord from '../images/discord.png'
import github from '../images/github.png'
import reddit from '../images/reddit.png'
import bct from '../images/bct.png'

export default class Social extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { socialTrigger } = this.props;

    return (
    <div className="socialHrefs">
      <a target='_blank' onClick={socialTrigger} href='https://discord.gg/s5rSvB2'>
        <img name='Discord' className='discord' src={discord}/>
      </a>
      <a target='_blank' onClick={socialTrigger} href='https://t.me/ValidityCrypto'>
        <img name='Telegram' className='telegram' src={telegram}/>
      </a>
      <a target='_blank' onClick={socialTrigger} href='https://www.github.com/ValidityCrypto'>
        <img name='Github' className='github' src={github}/>
      </a>
      <a target='_blank' onClick={socialTrigger} href='https://angel.co/company/validitycrypto'>
        <img name='AngelList' className='angelList' src={angellist}/>
      </a>
      <a target='_blank' onClick={socialTrigger} href='https://www.linkedin.com/company/validitycrypto'>
        <img name='Linkedin' className='linkedin' src={linkedin}/>
      </a>
      <a target='_blank' onClick={socialTrigger} href='https://www.reddit.com/r/ValidityCrypto'>
        <img name='Reddit' className='reddit' src={reddit}/>
      </a>
      <a target='_blank' onClick={socialTrigger} href='https://twitter.com/ValidityCrypto'>
        <img  name='Twitter' className='twitter' src={twitter}/>
      </a>
      <a target='_blank' onClick={socialTrigger} href='https://www.facebook.com/ValidityCrypto'>
        <img name='Facebook' className='facebook' src={facebook}/>
      </a>
      <a target='_blank' onClick={socialTrigger} href='https://bitcointalk.org/index.php?topic=4900179'>
        <img name='BitcoinTalk' className='bct' src={bct}/>
      </a>
     </div>
    )
  }
}
