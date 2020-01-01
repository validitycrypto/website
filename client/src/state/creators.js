import { PROVIDER_CONNECT, ACCOUNT_METADATA } from './types';

export const provider = {
  connect: (payload) => { return { type: PROVIDER_CONNECT, payload } },
  metadata: (payload) => { return { type: ACCOUNT_METADATA, payload } },
}
