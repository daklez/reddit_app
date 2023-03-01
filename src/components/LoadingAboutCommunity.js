import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const LoadingAboutCommunity = () => {
    return (
        <div id="about-community" >
            <p ><Skeleton/></p>
            <hr/>
            <p ><Skeleton count={5}/></p>
            <p id="community-created"><Skeleton /></p>
            <hr/>
            <p ><Skeleton/></p>
        </div>
    )

}