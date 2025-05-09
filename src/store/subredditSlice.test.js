import subredditSlice, { initialState, startGetSubreddits, getSubredditsSuccess, getSubredditssFailed } from "./subredditSlice";

test('subreddit reducer initialState', () => {
    const action = { type: '' };
    const result = subredditSlice(initialState, action);
    expect(result).toEqual(initialState);
});

test('subreddit reducer startGetSubreddits', () => {
    const action = startGetSubreddits();
    const result = subredditSlice(initialState, action);
    expect(result).toEqual({
        subreddits: [], 
        error: false, 
        isLoading: true 
    });
});

test('subreddit reducer getSubredditsSuccess', () => {
    const action = getSubredditsSuccess(['Test1', 'Test2']);
    const result = subredditSlice(initialState, action);
    expect(result).toEqual({
        subreddits: ['Test1', 'Test2'], 
        error: false, 
        isLoading: false
    });
});

test('subreddit reducer getSubredditssFailed', () => {
    const action = getSubredditssFailed();
    const result = subredditSlice(initialState, action);
    expect(result).toEqual({
        subreddits: [], 
        error: true, 
        isLoading: false
    });
});