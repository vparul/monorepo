import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for shared state
const appSlice = createSlice({
    name: 'app',
    initialState: {
        message: '',
        data: {}
    },
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setData: (state, action) => {
            state.data = { ...state.data, ...action.payload };
        },
        clearData: (state) => {
            state.data = {};
        },
    },
});

export const { setMessage, setData, clearData } = appSlice.actions;

// Create and export the store
const store = configureStore({
    reducer: {
        app: appSlice.reducer,
    },
});

export default store;
