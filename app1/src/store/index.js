import { configureStore } from '@reduxjs/toolkit';
import applicationsReducer from './applicationSlice';

const store = configureStore({
    reducer: {
        applications: applicationsReducer,
    },
});

export default store;
