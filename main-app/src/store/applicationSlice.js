import { createSlice } from '@reduxjs/toolkit';

const applicationsSlice = createSlice({
    name: 'applications',
    initialState: [],
    reducers: {
        addApplication: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addApplication } = applicationsSlice.actions;

export default applicationsSlice.reducer;
