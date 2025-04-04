import React, { useEffect } from "react";
import "./Feed.css";
import Post from '../../features/Post/Post'
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectFilteredPosts } from "../../store/redditSlice";

function Feed() {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    return (
        <div className="Feed">
            {posts.map((post, index) => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    );
};

export default Feed;