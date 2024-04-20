// store.js
import {configureStore} from '@reduxjs/toolkit';
import nodeReducer from '../features/nodeReducer';
import edgeReducer from '../features/edgeReducer';

const store = configureStore({
    reducer: nodeReducer, edgeReducer
})

export default store;
