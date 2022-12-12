import './header.css'
import React from "react";
import Logo from '../../Logo.png';
import { SearchBar } from "../../components/SearchBar";

export const Header = () => {
  return (
    <div id="header">
      <img src={Logo} alt="logo" width={50} height={50}/>
      <SearchBar />
    </div>
    );
};
