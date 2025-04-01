import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: ''
}

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState: initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
});

export const {
    setSearchTerm
} = redditSlice.actions;

export default redditSlice.reducer;