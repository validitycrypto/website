import { web3Provider } from './reducers';
import { createStore } from 'redux';

const store = createStore(web3Provider);

export default store;
