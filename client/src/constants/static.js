import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { PURPLE_PRIMARY } from './palette';

export const MUI_STYLE = createMuiTheme({ sideBar: { background: PURPLE_PRIMARY } });

export const PAGE_INDEXES = [
  { label: 'Landing', value: 'landingPage' },
  { label: 'What is Validity?', value: 'page1' },
  { label: 'Communal Validation', value: 'page2' },
  { label: 'How does it work?', value: 'page3' },
  { label: 'Why use Validity?', value: 'page4' },
  { label: 'Product', value: 'page5' },
  { label: 'Tokenonomics', value: 'page6' },
  { label: 'Resources', value: 'page7' },
  { label: 'Team', value: 'page8' },
  { label: 'Roadmap', value: 'page9' },
  { label: 'FAQ', value: 'page10' },
  { label: 'Get Involved', value: 'page11' }
];
