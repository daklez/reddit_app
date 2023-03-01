import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const LoadingPost = () => {
  
  return (
    <div className='post-container' >
      <div className='post' >
        <p className="center-text" ><Skeleton width={10}/><br/><Skeleton width={20}/></p>
        <div className="post-content" style={{'min-width': '91%'}}>
          <p className="post-margin" style={{'max-width': '30%'}}><Skeleton /></p>
          <p className="post-margin post-title"><Skeleton  /></p>
          
            <Skeleton height={250} />
          
          <hr/>
          <p  className="post-margin comment-icon"><Skeleton width={50}/></p> 
        </div>
      </div>
    </div>
  );
}