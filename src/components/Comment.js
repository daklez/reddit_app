import React from "react";
import { formatedTime } from "./Post";
import  DOMpurify  from 'dompurify';
var md = require('markdown-it')();

export const Comment = (props) => {
    const { comment } = props;
    if(comment.body){
       var result = DOMpurify.sanitize(md.render(comment.body));
    }
    
    return (
    <div key={comment.id} className='comment'>
        <p><span className="bold-text comment-author"><a href={`https://www.reddit.com/user/${comment.author}`} target='_blank' rel="noreferrer" className="post_author-link">{comment.author}</a></span><span className="gray-text"> · {formatedTime(comment.created)}</span></p>
        <div className="comment-body" dangerouslySetInnerHTML={{ __html: result }}></div>
        <p><span className="bold-text">{comment.score < 1000 ? comment.score : (comment.score/1000).toFixed(1) + 'k'}</span> {comment.score === 1 ? 'Vote' : 'Votes'}</p>
    </div>
  )
}