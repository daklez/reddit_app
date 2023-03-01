import React from "react";
import { LoadingAboutCommunity } from "./LoadingAboutCommunity";
import { LoadingPost } from "./LoadingPost";
import { LoadingSubredditInfo } from "./LoadingSubredditinfo";

export const LoadingSubreddit = () => {
    return (
        <div id='main'>
          <LoadingAboutCommunity />
          <div id='main-main' style={{'min-width': '80%'}}>
            <LoadingSubredditInfo />
            <LoadingPost />
          </div>
        </div>
      ) ;
}