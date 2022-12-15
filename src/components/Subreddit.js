import React from 'react';

export const Subreddit = (props) => {
  const { url, name, avatar, id } = props

  return (
    <li key={id} title={url}>
      <img
        src={
          avatar || "https://cdn-icons-png.flaticon.com/512/3670/3670226.png"
        }
        alt={name}
        width={20}
        height={20}
      />
      {name}
    </li>
  );
}