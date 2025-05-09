import redditSlice, { initialState, setSearchTerm, startGetPosts, getPostsSuccess, getPostsFailed, setSelectedSubreddit, startGetComments, getCommentsSuccess, getCommentsFailed } from "./redditSlice";

test('reddit reducer initialState', () => {
    const action = { type: '' };
    const result = redditSlice(initialState, action);
    expect(result).toEqual(initialState);
});

test('reddit reducer setSearchTerm', () => {
    const action = setSearchTerm('TestValue');
    const result = redditSlice(initialState, action);
    expect(result).toEqual({
        posts: [],
        error: false,
        isLoading: false,
        searchTerm: 'TestValue',
        selectedSubreddit: {icon_img: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png", url: "/r/pics/"},
        isLoadingComments: false,
        errorComments: false,
        showingComments: false
    });
});

test('reddit reducer startGetPosts', () => {
    const action = startGetPosts();
    const result = redditSlice(initialState, action);
    expect(result).toEqual({
        posts: [],
        error: false,
        isLoading: true,
        searchTerm: '',
        selectedSubreddit: {icon_img: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png", url: "/r/pics/"},
        isLoadingComments: false,
        errorComments: false,
        showingComments: false 
    });
});

test('reddit reducer getPostsSuccess', () => {
    const action = getPostsSuccess([{post: 'Test'}, {post: 'Test2'}]);
    const result = redditSlice(initialState, action);
    expect(result).toEqual({
        posts: [{post: 'Test'}, {post: 'Test2'}],
        error: false,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: {icon_img: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png", url: "/r/pics/"},
        isLoadingComments: false,
        errorComments: false,
        showingComments: false 
    });
});

test('reddit reducer getPostsFailed', () => {
    const action = getPostsFailed();
    const result = redditSlice(initialState, action);
    expect(result).toEqual({
        posts: [],
        error: true,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: {icon_img: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png", url: "/r/pics/"},
        isLoadingComments: false,
        errorComments: false,
        showingComments: false
    });
});

test('reddit reducer setSelectedSubreddit', () => {
    const action = setSelectedSubreddit('TestValue');
    const result = redditSlice(initialState, action);
    expect(result).toEqual({
        posts: [],
        error: false,
        isLoading: false,
        searchTerm: '', 
        selectedSubreddit: 'TestValue',
        isLoadingComments: false,
        errorComments: false,
        showingComments: false
    });
});

test('reddit reducer startGetComments', () => {
    let action = getPostsSuccess([{post: 'Test'}, {post: 'Test2'}]);
    let result = redditSlice(initialState, action);

    action = startGetComments(0);
    let result2 = redditSlice(result, action);
 
    expect(result2).toEqual({
        posts: [{post: 'Test',        
            isLoadingComments: true,
            errorComments: false,
            showingComments: true}, {post: 'Test2'}],
        error: false,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: {icon_img: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png", url: "/r/pics/"},
        isLoadingComments: false,
        errorComments: false,
        showingComments: false
    });
});

test('reddit reducer getCommentsSuccess', () => {
    let action = getPostsSuccess([{post: 'Test'}, {post: 'Test2'}]);
    let result = redditSlice(initialState, action);

    action = getCommentsSuccess({index: 0, comments: ['Test Comment']});
    let result2 = redditSlice(result, action);

    expect(result2).toEqual({
        posts: [{post: 'Test',        
            isLoadingComments: false,
            errorComments: false,
            comments: ['Test Comment']},
            {post: 'Test2'}],
        error: false,
        isLoading: false,
        searchTerm: '', 
        selectedSubreddit: {icon_img: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png", url: "/r/pics/"},
        isLoadingComments: false,
        errorComments: false,
        showingComments: false
    });
});

test('reddit reducer getCommentsFailed', () => {
    let action = getPostsSuccess([{post: 'Test'}, {post: 'Test2'}]);
    let result = redditSlice(initialState, action);

    action = getCommentsFailed(0);
    let result2 = redditSlice(result, action);

    expect(result2).toEqual({
        posts: [{post: 'Test',        
            isLoadingComments: false,
            errorComments: true,},
            {post: 'Test2'}],
        error: false,
        isLoading: false,
        searchTerm: '', 
        selectedSubreddit: {icon_img: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png", url: "/r/pics/"},
        isLoadingComments: false,
        errorComments: false,
        showingComments: false
    });
});

