import { compareUtcDesc } from "../utility/converters";

const API_ROOT = 'https://www.reddit.com';
const API_SUBREDDIT = '/subreddits';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();

    return json.data.children.sort(compareUtcDesc).map((post) => post.data);
};

export const getPostComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();

    return json[1].data.children.sort(compareUtcDesc).map((comments) => comments.data);
};

export const getSubreddits = async () => {
    const response = await fetch(`${API_ROOT}${API_SUBREDDIT}.json`);
    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data);
};