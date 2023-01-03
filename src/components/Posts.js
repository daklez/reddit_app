import React from "react";
import { Post } from "./Post";

export const Posts = (props) => {
  const { posts } = props;
  return posts.map((post) => (
    <Post post={post}/>
  ));
};
