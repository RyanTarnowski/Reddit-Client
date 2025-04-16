import React, { useEffect } from "react";
import "./Subreddits.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits, selectSubreddits } from "../../store/subredditSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../../store/redditSlice";
import redditIcon from "../../content/icons8-reddit-96.png"

function Subreddits() {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch])

    return (
        <div className="Subreddits">
            <img className="SubredditIcon" src={selectedSubreddit.icon_img || redditIcon} />
            <select className="SubredditSelect" onChange={(e) => dispatch(setSelectedSubreddit(subreddits.find((sr) => sr.url === e.target.value)))} 
                value={selectedSubreddit.url}>
                {subreddits.map((subreddit) => (
                    <option key={subreddit.id}
                            value={subreddit.url}
                    >
                        {subreddit.display_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Subreddits;