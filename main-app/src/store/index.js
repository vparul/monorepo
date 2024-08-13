import { configureStore, createSlice } from '@reduxjs/toolkit';

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
        clearMessage: (state) => {
            state.message = "";
        }
    },
});

export const { setMessage, setData, clearData, clearMessage } = appSlice.actions;

const store = configureStore({
    reducer: {
        app: appSlice.reducer,
    },
});

export default store;
