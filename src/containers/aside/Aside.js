import './Aside.css';
import React from "react";
import { Subreddits } from "../../components/Subreddits";

export const Aside = () => {
  return (
    <div id="aside">
      <h2>Popular Subreddits</h2>
      <Subreddits aside={true}/>
    </div>
  )
}