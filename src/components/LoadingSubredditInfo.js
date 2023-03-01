import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const LoadingSubredditInfo = (props) => {

    return (
        <div id="subreddit-info" >
            <div style={{borderRadius: '100%'}}>
                <Skeleton width={128} height={128} circle={true}/>
            </div>
            <div style={{width: '30%'}}>
                <h1 ><Skeleton /></h1>
                <p style={{width: '30%'}}><Skeleton /></p>
            </div>   
        </div>
    )
}