import React, { useEffect } from "react";
import "./Feed.css";
import Post from '../../features/Post/Post'
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, fetchPosts, selectFilteredPosts } from "../../store/redditSlice";

function Feed() {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit.url));
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink, showingComments) => {
            dispatch(fetchComments(index, permalink, showingComments));
        };
        return getComments; 
    };

    return (
        <div className="Feed">
            {posts.map((post, index) => (
                <Post 
                    key={post.id} 
                    post={post}
                    onToggleComments={onToggleComments(index)}
                />
            ))}
        </div>
    );
};

export default Feed;