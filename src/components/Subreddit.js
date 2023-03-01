import React from 'react';
import { useSelector } from 'react-redux';
import { selectPickedSubreddit } from '../store/mainSlice';

export const Subreddit = (props) => {
  const { url, name, avatar, id, handleClick } = props
  const pickedSubreddit = useSelector(selectPickedSubreddit)
  const selected = pickedSubreddit.includes(url)

  return (
    <li key={id} id={url} onClick={handleClick} className={selected ? 'subreddit active':'subreddit'}>
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