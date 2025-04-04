import redditSlice, { initialState, setSearchTerm } from "./redditSlice";

test('reddit reducer initial state', () => {
    const action = { type: '' };
    const result = redditSlice(initialState, action);

    expect(result).toEqual(initialState);
});

test('reddit reducer set search term', () => {
    const action = setSearchTerm('TestValue');
    const result = redditSlice(initialState, action);

    expect(result).toEqual({posts:[],error:false,isLoading:false,searchTerm:'TestValue'});
});