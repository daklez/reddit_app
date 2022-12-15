import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  selectSubreddits, 
  selectSubredditsLoading, 
  selectSubredditsFailed, 
  getSubreddits } from "../store/subredditsSlice";
import { Subreddit } from "./Subreddit";

export const Subreddits = () => {
  const subreddits = useSelector(selectSubreddits);
  const subredditsLoading = useSelector(selectSubredditsLoading);
  const subredditsFailed = useSelector(selectSubredditsFailed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubreddits())
  }, [dispatch]);

  const handleFailure = () => {
    dispatch(getSubreddits())
  }

  if(subredditsLoading){
    return <p>Loading Subreddits...</p>
  }

  if(subredditsFailed){
    return (
      <div>
        <h3>Something went wrong</h3>
        <button onClick={handleFailure}>Try Again</button>
      </div>
    )
  }

  return (
    <ul>
      {subreddits.map(subreddit => {
        return <Subreddit url={subreddit.url} name={subreddit.display_name} avatar={subreddit.icon_img} id={subreddit.id}/>
      })}
    </ul>
  )
}