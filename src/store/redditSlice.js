import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getSubredditPosts } from '../api/reddit';

export const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/pics/'  //Default Feed
}

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState: initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },

        startGetPosts(state) {
            state.isLoading = true;
            state.error = false;
        },

        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.error = false;
            state.posts = action.payload;
        },

         getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
         },

         setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
         },



    }
});

export const {
    setSearchTerm,
    startGetPosts,
    getPostsFailed,
    getPostsSuccess,
    setSelectedSubreddit,
} = redditSlice.actions;

export default redditSlice.reducer;


export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit);

        dispatch(getPostsSuccess(posts));
    } catch (error)
    {
        dispatch(getPostsFailed());
    }
};

const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;

export const selectFilteredPosts = createSelector([selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm !== '') {
            return posts.filter((post) => 
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        return posts;
    }
);