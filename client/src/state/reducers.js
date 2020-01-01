import { PROVIDER_CONNECT, ACCOUNT_METADATA } from './types';

const initialState = {
  networkId: undefined,
  web3: undefined,
  accounts: []
}

export function web3Provider(state = initialState, action) {
  switch (action.type) {
    case PROVIDER_CONNECT:
      return { ...state, web3: action.payload }
    case ACCOUNT_METADATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
