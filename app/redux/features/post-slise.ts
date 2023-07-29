import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import { PostType } from '@/app/models/Posts';
import { data } from '../db/jason';

const initialState:PostType[] = data.map((value)=>{
    return { ...value, 
        id: parseInt(value.id)
    }
});
const local:PostType[] = localStorage?.getItem("posts") !== null ? JSON.parse(localStorage?.getItem("posts")||""): initialState
const postsSlice = createSlice({
    name : "posts",
    initialState:local,
    reducers: {
        deletePost : (state , action:PayloadAction<number>)=>{
            const newState = state.filter((value , _)=>value.id!==action.payload);
            localStorage.setItem('posts', JSON.stringify(newState.map((item) => item)));
            return newState;
        },

    },
}
);
const {reducer} = postsSlice;
export const {deletePost} = postsSlice.actions;
export default reducer; 
