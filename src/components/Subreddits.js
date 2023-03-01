import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  selectSubreddits, 
  selectSubredditsLoading, 
  selectSubredditsFailed, 
  getSubreddits } from "../store/subredditsSlice";
import { Subreddit } from "./Subreddit";
import { pickNewSubrreddit } from "../store/mainSlice";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useHistory, useLocation } from 'react-router-dom';

export const Subreddits = (props) => {
  const subreddits = useSelector(selectSubreddits);
  const subredditsLoading = useSelector(selectSubredditsLoading);
  const subredditsFailed = useSelector(selectSubredditsFailed);
  const dispatch = useDispatch();
  const history = useHistory()
  const location = useLocation()
  console.log(location.pathname)

  useEffect(() => {
    dispatch(getSubreddits())
  }, [dispatch]);

  const handleClick = ({target}) => {
    dispatch(pickNewSubrreddit(target.id));
    window.scrollTo(0, 0)
    if(!props.aside){
      document.getElementById('header-subreddits').style.display = 'none';
      props.setShowSubreddits(!props.showSubreddits)
    }
    location.pathname = target.id
    history.push(target.id)
  }

  const handleFailure = () => {
    dispatch(getSubreddits())
  }

  if(!props.aside){
    if(subredditsFailed){
      return (
        <div>
          <h3>Something went wrong</h3>
          <button onClick={handleFailure}>Try Again</button>
        </div>
      )
    }
    return (
      <ul id='header-subreddits'>
        {subreddits.map(subreddit => {
          return <Subreddit url={subreddit.url} name={subreddit.display_name_prefixed} avatar={subreddit.icon_img} id={subreddit.id} handleClick={handleClick} />
        })}
      </ul>
    )
  }

  if(subredditsLoading){
    return <Skeleton count={20} height={30}/>
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
        return <Subreddit url={subreddit.url} name={subreddit.display_name_prefixed} avatar={subreddit.icon_img} id={subreddit.id} handleClick={handleClick} />
      })}
    </ul>
  )
}