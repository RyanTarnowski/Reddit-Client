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
                        <div className="Comments" key={index}>
                            <div className="CommentInfo"> 
                                <p>Posted by: {comment.author}</p>
                                <p>Create Date: {unixToLocalTime(comment.created_utc)}</p>
                            </div>
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
            <img src={post.url} alt=''/>
            <h3>{post.title}</h3>
            <div className="PostInfo"> 
                <p>Posted by: {post.author}</p>
                <p>Create Date: {unixToLocalTime(post.created_utc)}</p>
                <button type="button" onClick={() => onToggleComments(post.permalink, post.showingComments)}>
                    {post.num_comments}
                </button>
            </div>
            {renderComments()}
        </div>
    );
};

export default Post;