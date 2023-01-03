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
      {currentSubreddit[0] && <div>
          <img 
            src={currentSubreddit[0].icon_img || "https://cdn-icons-png.flaticon.com/512/3670/3670226.png"} 
            alt={currentSubreddit[0].display_name}
            width={128}
            height={128}
          />
          <h1>{currentSubreddit[0].title}</h1>
          <p>{currentSubreddit[0].display_name_prefixed}</p>
        </div>}
      
      <Posts posts={posts}/>
    </div>
  ) ;
};
