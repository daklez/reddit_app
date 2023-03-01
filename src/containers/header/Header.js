import './header.css'
import React, {useState} from "react";
import Logo from '../../Logo.png';
import LogoSmall from '../../LogoSmall.png';
import { SearchBar } from "../../components/SearchBar";
import { Subreddits } from '../../components/Subreddits';

export const Header = () => {
  const [showSubreddits, setShowSubreddits] = useState(false);

  const handleClick = () => {
    setShowSubreddits(!showSubreddits)
  }
 
  return (
    <div id="header">
      <div id='logo-container'>
        <picture>
          <source media="(max-width: 1000px)" srcSet={LogoSmall} />
          <img src={Logo} alt="IfItDoesntMatchAnyMedia" />
        </picture>
        <span className="material-symbols-outlined" id='header-subreddits-icon' onClick={handleClick}>
          expand_more
        </span> 
        {showSubreddits && <Subreddits aside={false} setShowSubreddits={setShowSubreddits} showSubreddits={showSubreddits}/> }
      </div>
      <SearchBar />
    </div>
    );
};
