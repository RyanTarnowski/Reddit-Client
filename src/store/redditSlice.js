import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getSubredditPosts, getPostComments } from '../api/reddit';

export const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: {
        url: '/r/pics/', 
        icon_img: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png"
    }, //Default Feed
    isLoadingComments: false,
    errorComments: false,
    showingComments: false
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

         startGetComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
            state.posts[action.payload].isLoadingComments = true;
            state.posts[action.payload].errorComments = false;
         },

         getCommentsSuccess(state, action) {
            state.posts[action.payload.index].isLoadingComments = false;
            state.posts[action.payload.index].errorComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
         },

         getCommentsFailed(state, action) {
            state.posts[action.payload].isLoadingComments = false;
            state.posts[action.payload].errorComments = true;
         }
    }
});

export const {
    setSearchTerm,
    startGetPosts,
    getPostsFailed,
    getPostsSuccess,
    setSelectedSubreddit,
    startGetComments,
    getCommentsSuccess,
    getCommentsFailed
} = redditSlice.actions;

export default redditSlice.reducer;


export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit);

        //Spread thepost data from reddit and add additional fields for toggling comments:
        const postsWithMetadata = posts.map((post) => ({
            ...post, 
            comments: []
        }))

        dispatch(getPostsSuccess(postsWithMetadata));
    } catch (error)
    {
        dispatch(getPostsFailed());
    }
};

export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(startGetComments(index));
        const comments = await getPostComments(permalink);
        dispatch(getCommentsSuccess({index, comments}));
    } catch (error)
    {
        dispatch(getCommentsFailed(index));
    }
}

const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;

export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;

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