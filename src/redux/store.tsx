// store.ts
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer.tsx';

const store = createStore(rootReducer);

export default store;
