import React from "react";
import { useSelector } from "react-redux";
import { selectPostFiltered, selectPickedSubreddit } from "../store/mainSlice";
import { selectSubreddits } from "../store/subredditsSlice";
import { AboutCommunity } from "./AboutCommunity";
import { SubredditInfo } from "./SubredditInfo";
import { Posts } from "./Posts";

export const CurrentSubreddit = () => {
    const posts = useSelector(selectPostFiltered);
    const pickedSubreddit = useSelector(selectPickedSubreddit);
    const currentSubreddit = useSelector(selectSubreddits).filter(subreddit => subreddit.url === pickedSubreddit);
    //console.log(useSelector(selectSubreddits)[5].url === pickedSubreddit)

    return (
        <div id='main'>
          {currentSubreddit[0] && <AboutCommunity currentSubreddit={currentSubreddit[0]}/>}
          <div id='main-main'>
            {currentSubreddit[0] && <SubredditInfo currentSubreddit={currentSubreddit[0]}/>}
            <Posts posts={posts}/>
            {posts.length === 0 && <h1 style={{textAlign: 'center'}}>Sorry! no posts matched your search</h1> }
          </div>
        </div>
      )
}