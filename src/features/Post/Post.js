import React from "react";
import "./Post.css";
import { unixToLocalTime, getDateTimeDiff } from "../../utility/converters";

function Post(props) {
    const { post, onToggleComments } = props;

    const renderComments = () => {
        if (post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment, index) => (
                        <div className="Comments" key={index}>
                            <div className="CommentInfo"> 
                                <p><span className="FieldTitle">Posted by:</span> {comment.author}</p>
                                <p title={unixToLocalTime(comment.created_utc)}><span className="FieldTitle">Posted:</span> {getDateTimeDiff(comment.created_utc)} <span className="FieldTitle">ago</span></p>
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
                <p><span className="FieldTitle">Posted by:</span> {post.author}</p>
                <p title={unixToLocalTime(post.created_utc)}><span className="FieldTitle">Posted:</span> {getDateTimeDiff(post.created_utc)} <span className="FieldTitle">ago</span></p>
                <button className="UpsButton" type="button">
                    {post.ups}
                </button>
                <button className="CommentsButton" type="button" onClick={() => onToggleComments(post.permalink, post.showingComments)}>
                    {post.num_comments}
                </button>
            </div>
            {renderComments()}
        </div>
    );
};

export default Post;