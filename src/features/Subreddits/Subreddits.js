import React, { useEffect } from "react";
import "./Subreddits.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits, selectSubreddits } from "../../store/subredditSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../../store/redditSlice";

function Subreddits() {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch])

    return (
        <div className="Subreddits">
            <select onChange={(e) => dispatch(setSelectedSubreddit(e.target.value))} defaultValue="/r/pics/"
                value={selectedSubreddit}>
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