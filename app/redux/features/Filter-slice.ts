import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { PostType } from '@/app/models/Posts';
import { data } from '../db/jason';

const filtersSlice = createSlice({
    name: "filters",
    initialState: "",
    reducers: {
        updateFilter: (state, action: PayloadAction<string>) => {
            return action.payload
        },
    },
},
);
const {reducer} = filtersSlice;
export const { updateFilter } = filtersSlice.actions;
export default reducer;
