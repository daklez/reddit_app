import React from "react";
import { Comment } from "./Comment";

export const Comments = (props) =>{
    const { comments, name } = props;
    const postComments = comments.find(comment => Object.keys(comment)[0] === name )[name];

    return postComments.map(comment => {
        return <Comment comment={comment} />
    })
}