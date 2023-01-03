import React from "react";

export const SubredditInfo = (props) => {
    const currentSubreddit = props.currentSubreddit;

    return (
        <div>
          <img 
            src={currentSubreddit.icon_img || "https://cdn-icons-png.flaticon.com/512/3670/3670226.png"} 
            alt={currentSubreddit.display_name}
            width={128}
            height={128}
          />
          <h1>{currentSubreddit.title}</h1>
          <p>{currentSubreddit.display_name_prefixed}</p>
        </div>
    )
}