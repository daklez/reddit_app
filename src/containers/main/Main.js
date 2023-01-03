import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  selectPickedSubreddit, 
  selectPostsLoading,
  selectPostsFailed,
  loadSubredditPosts,
  selectPostFiltered
 } from "../../store/mainSlice";
 import { selectSubreddits } from "../../store/subredditsSlice";
import { Posts } from "../../components/Posts";
import { SubredditInfo } from "../../components/SubredditInfo";
import { AboutCommunity } from "../../components/AboutCommunity";

export const Main = () => {
  const dispatch = useDispatch();
  const pickedSubreddit = useSelector(selectPickedSubreddit);
  const posts = useSelector(selectPostFiltered);
  const postsLoading = useSelector(selectPostsLoading);
  const postsFailed = useSelector(selectPostsFailed);
  const currentSubreddit = useSelector(selectSubreddits).filter(subreddit => subreddit.url === pickedSubreddit);

  useEffect(() => {
    dispatch(loadSubredditPosts(pickedSubreddit));
  }, [pickedSubreddit, dispatch])

  if(postsLoading){
    return <p>Loading posts...</p>
  }

  if(postsFailed){
    return (
      <div>
        <p>Something went wrong</p>
        <button onClick={()=>dispatch(loadSubredditPosts(pickedSubreddit))}>Try Again</button>
      </div>
    )
  }

  return (
    <div>
      {currentSubreddit[0] && <SubredditInfo currentSubreddit={currentSubreddit[0]}/>}
      {currentSubreddit[0] && <AboutCommunity currentSubreddit={currentSubreddit[0]}/>}
      <Posts posts={posts}/>
    </div>
  ) ;
};
