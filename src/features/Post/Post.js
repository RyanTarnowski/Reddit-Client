import React from "react";
import "./Post.css";
import { unixToLocalTime } from "../../utility/converters";

function Post(props) {
    const { post, onToggleComments } = props;

    const renderComments = () => {
        if (post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment, index) => (
                        <div key={index}>
                            <p>Author: {comment.author}</p>
                            <p>Create Date: {unixToLocalTime(comment.created_utc)}</p>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            )
        }

        return null;
    }

    return (
        <div className="Post">
            <h3>{post.title}</h3>
            <img src={post.url} alt=''/>
            <p>Author: {post.author}</p>
            <p>Create Date: {unixToLocalTime(post.created_utc)}</p>

            <button type="button" onClick={() => onToggleComments(post.permalink, post.showingComments)}>
                {post.num_comments}
            </button>

            {renderComments()}
        </div>
    );
};

export default Post;