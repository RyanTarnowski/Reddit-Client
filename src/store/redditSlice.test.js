import redditSlice, { initialState, setSearchTerm, startGetPosts, getPostsSuccess, getPostsFailed, setSelectedSubreddit, fetchPosts } from "./redditSlice";

test('reddit reducer initialState', () => {
    const action = { type: '' };
    const result = redditSlice(initialState, action);

    expect(result).toEqual(initialState);
});

test('reddit reducer setSearchTerm', () => {
    const action = setSearchTerm('TestValue');
    const result = redditSlice(initialState, action);
    expect(result).toEqual({posts:[],error:false,isLoading:false,searchTerm:'TestValue', selectedSubreddit:'/r/pics/'});
});

test('reddit reducer startGetPosts', () => {
    const action = startGetPosts();
    const result = redditSlice(initialState, action);
    expect(result).toEqual({posts:[],error:false,isLoading:true,searchTerm:'', selectedSubreddit:'/r/pics/'});
});

test('reddit reducer getPostsSuccess', () => {
    const action = getPostsSuccess([{post: 'Test'}, {post: 'Test2'}]);
    const result = redditSlice(initialState, action);
    expect(result).toEqual({posts:[{post: 'Test'}, {post: 'Test2'}],error:false,isLoading:false,searchTerm:'', selectedSubreddit:'/r/pics/'});
});

test('reddit reducer getPostsFailed', () => {
    const action = getPostsFailed();
    const result = redditSlice(initialState, action);
    expect(result).toEqual({posts:[],error:true,isLoading:false,searchTerm:'', selectedSubreddit:'/r/pics/'});
});

test('reddit reducer setSelectedSubreddit', () => {
    const action = setSelectedSubreddit('TestValue');
    const result = redditSlice(initialState, action);
    expect(result).toEqual({posts:[],error:false,isLoading:false,searchTerm:'', selectedSubreddit:'TestValue'});
});


// test('reddit reducer fetchPosts', () => {
//     // const action = setSelectedSubreddit('TestValue');
//     const result = fetchPosts('');

//     expect(result).toEqual([]);
// });