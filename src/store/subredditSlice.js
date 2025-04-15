import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

export const initialState = {
    subreddits: [],
    error: false,
    isLoading: false
}

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: initialState,
    reducers: {
        startGetSubreddits(state) {
            state.isLoading = true;
            state.error = false;
        },

        getSubredditsSuccess(state, action) {
            state.isLoading = false;
            state.error = false;
            state.subreddits = action.payload;
        },

         getSubredditssFailed(state) {
            state.isLoading = false;
            state.error = true;
         }
    }
});

export const {
    startGetSubreddits,
    getSubredditsSuccess,
    getSubredditssFailed
} = subredditsSlice.actions;

export default subredditsSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(startGetSubreddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditsSuccess(subreddits));
    } catch (error)
    {
        dispatch(getSubredditssFailed());
    }
};

export const selectSubreddits = (state) => state.subreddit.subreddits;