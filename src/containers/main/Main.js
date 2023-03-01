import './Main.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  selectPickedSubreddit, 
  selectPostsLoading,
  selectPostsFailed,
  loadSubredditPosts,
  pickNewSubrreddit
 } from "../../store/mainSlice";
import { LoadingSubreddit } from '../../components/LoadingSubreddit';
import { CurrentSubreddit } from '../../components/CurrentSubreddit';
import { Route, useLocation } from 'react-router-dom';


export const Main = () => {
  const dispatch = useDispatch();
  const pickedSubreddit = useSelector(selectPickedSubreddit);
  const postsLoading = useSelector(selectPostsLoading);
  const postsFailed = useSelector(selectPostsFailed);
  const location = useLocation()

  useEffect(() => {
    if(location.pathname[location.pathname.length-1] !== '/'){
      location.pathname = location.pathname + '/';
    }
    dispatch(loadSubredditPosts(location.pathname));
    dispatch(pickNewSubrreddit(location.pathname))
  }, [pickedSubreddit, dispatch, location])

  

  if(postsLoading){
    return <LoadingSubreddit />
  }

  if(postsFailed){
    return (
      <div>
        <p>Something went wrong</p>
        <button onClick={()=>dispatch(loadSubredditPosts(pickedSubreddit))}>Try Again</button>
      </div>
    )
  }

  return  (
    <Route path={location.pathname} component={CurrentSubreddit} />
    
  );
};
