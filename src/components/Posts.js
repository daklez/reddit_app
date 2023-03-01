import React from "react";
import { Post } from "./Post";

export const Posts = (props) => {
  const { posts } = props;
  return posts.map((post, index) => (
    <Post post={post} index={index}/>
  ));
};
