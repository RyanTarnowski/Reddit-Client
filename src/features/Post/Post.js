import React from "react";
import "./Post.css";
import { unixToLocalTime } from "../../utility/converters";

function Post(props) {
    const { post } = props;
    
    return (
        <div className="Post">
            <h3>{post.title}</h3>
            <img src={post.url} alt=''/>
            <p>Author: {post.author}</p>
            <p>Create Date: {unixToLocalTime(post.created_utc)}</p>
            <p>Comments: {post.num_comments}</p>
            <p>{post.permalink}</p>
        </div>
    );
};

export default Post;