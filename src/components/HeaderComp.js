

import React from "react";
import avatar from "../assets/images/avatar.png";
import logofsb from "../assets/images/logofsb.png";

const HeaderComp = () => {
  return (
    <header>
      <div className='left'>
      <img src={avatar} alt='' /> 
      <div className='user-infos'>
          <h1>GHARBAOUI Amine</h1>
          <h3>Laboratory: LTIM</h3>
          <h3>CIN:  ********</h3>
          <h3>CNE:  ********</h3>
          <h3>BirthDay:  ********</h3>
      </div>
      </div>
      <div className='right'>
        <img src={logofsb} alt='' />
      </div>
   </header>
  );
}

export default HeaderComp;
