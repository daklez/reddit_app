import React, {useState} from "react";
import { marked } from 'marked';
import  DOMpurify  from 'dompurify';
import { loadPostComments, selectPostComments, selectCommentsLoading, selectCommentsFailed, selectShowComments, toggleComments } from "../store/mainSlice";
import { useSelector, useDispatch } from "react-redux";
import { LoadingComments } from "./LoadingComments";
import { Comments } from "./Comments";

export const formatedTime = (posted) => {
  const elapsedTime = Date.now() - posted * 1000;
  const elapsedSeconds = Math.floor(elapsedTime / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);
  const elapsedMonths = Math.floor(elapsedDays / 30);
  const elapsedYears = Math.floor(elapsedMonths / 12);
  

  if(elapsedSeconds < 60){
    return elapsedSeconds + (elapsedSeconds === 1 ? ' second' : ' seconds') + ' ago';
  }else if(elapsedMinutes < 60){
    return elapsedMinutes + (elapsedMinutes === 1 ? ' minute' : 'minutes') + ' ago';
  }else if(elapsedHours < 24){
    return elapsedHours + (elapsedHours === 1 ? ' hour' : ' hours') + ' ago';
  }else if(elapsedDays < 30){
    return elapsedDays + (elapsedDays === 1 ? ' day' : ' days') + ' ago';
  }else if(elapsedMonths < 12){
    return elapsedMonths + (elapsedMonths === 1 ? ' month' : ' months') + ' ago';
  }else {
    return elapsedYears + (elapsedYears === 1 ? ' year' : ' years') + ' ago';
  }
}

export const Post = (props) => {
  const showComments = useSelector(selectShowComments)
  const [showCommentsLocal, setShowCommentsLocal] = useState(showComments);
  const dispatch = useDispatch();
  const comments = useSelector(selectPostComments);
  const commentsLoading = useSelector(selectCommentsLoading);
  const commentsFailed = useSelector(selectCommentsFailed);
  const { title, score, author, url, created, name, is_video, media, permalink  } = props.post;
  const isGallery = props.post.hasOwnProperty('is_gallery');
  
  const handleClick = () => {
    if(!showCommentsLocal && !comments.find(comment => Object.keys(comment)[0] === name )){
      dispatch(loadPostComments(permalink))
    }
    setShowCommentsLocal(!showCommentsLocal)
    dispatch(toggleComments())
  }

  const previewHTML = DOMpurify.sanitize(marked.parse(props.post.selftext)) ;

  return (
    <div key={name} id={'post-container' + name} className='post-container'>
      <div className='post'>
        <p className="center-text post-votes"><span className="bold-text ">{score < 1000 ? score : (score/1000).toFixed(1) + 'k'}</span><br/>{score === 1 ? 'Vote' : 'Votes'}</p>
        <div className="post-content">
          <p className="post-margin gray-text">Posted by <a href={`https://www.reddit.com/user/${author}`} target='_blank' rel="noreferrer" className="post_author-link">u/{author}</a> {formatedTime(created)}</p>
          <p className="post-margin post-title">{title}</p>
          <div className="post_content-container">
            {props.post.selftext && <div className="post-selftext" dangerouslySetInnerHTML={{ __html: previewHTML }}></div>}
            {is_video && 
            <video
              src={media.reddit_video.fallback_url}
              width={250}
              height={250}
              controls
            >
              Your browser doesnt admit <code>video</code>.
            </video>
            } 
            {url.search(/jpg|jpeg|gif|png|gifv/) !== -1 && (
              <img src={url} alt={title} width={250} height={250} />
            )}
            {isGallery && <p>This post has multiple pictures click <a href={url} target='_blank' rel='noreferrer' title={url}>here</a> to check them out</p>}
            {props.post.media_embed.content && <div><p>Click <a href={url} target='_blank' rel='noreferrer'>here</a> to check</p></div>}
          </div>
          <hr/>
          <p  className="post-margin comment-icon gray-text" onClick={handleClick}><span className="material-symbols-outlined" >comment</span> {props.post.num_comments < 1000 ? props.post.num_comments : (props.post.num_comments/1000).toFixed(1) + 'k'}  {props.post.num_comments === 1 ? 'Comment' : 'Comments'}</p> 
        </div>
      </div>
      {showCommentsLocal && <div className="comments-container">
        {showCommentsLocal && commentsLoading && <LoadingComments/>}
        {showCommentsLocal && commentsFailed && <p>Failed to load the comments for this post</p>}
        {showCommentsLocal && !commentsLoading && !commentsFailed && <div><Comments comments={comments} name={name} /></div> }
      </div>}
      
    </div>
  );
}