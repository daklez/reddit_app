import React, {useState} from "react";
import { loadPostComments, selectPostComments, selectCommentsLoading, selectCommentsFailed } from "../store/mainSlice";
import { useSelector, useDispatch } from "react-redux";

export const Post = (props) => {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector(selectPostComments);
  const commentsLoading = useSelector(selectCommentsLoading);
  const commentsFailed = useSelector(selectCommentsFailed);
  const { title, score, author, url, created, name, is_video, media, permalink  } = props.post;
  const isGallery = props.post.hasOwnProperty('is_gallery');
  
  
  const formatedTime = (posted) => {
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
  
  const handleClick = () => {
    if(!showComments && !comments.find(comment => Object.keys(comment)[0] === name )){
      dispatch(loadPostComments(permalink))
    }
    if(showComments){
      
    }
    setShowComments(!showComments)
  }


  return (
    <div key={name}>
      <p>{score < 1000 ? score : (score/1000).toFixed(1) + 'k'}</p>
      <p>posted by u/{author} {formatedTime(created)}</p>
      <p>{title}</p>
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
      <span class="material-symbols-outlined" onClick={handleClick}>
comment
</span>
      {showComments && commentsLoading && <p>Loading Comments</p>}
      {showComments && commentsFailed && <p>Failed to load the comments for this post</p>}
      {showComments && !commentsLoading && !commentsFailed && <div>{comments.find(comment => Object.keys(comment)[0] === name )[name].map(comment => {
        return (<div>
          <p>{comment.author} ° {formatedTime(comment.created)}</p>
          <p>{comment.body}</p>
        </div>)
      })}</div> }
      <hr />
    </div>
  );
}