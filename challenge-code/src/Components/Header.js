import React from "react";
import nothinbutnasalogo from './nothinbutnasalogo.png';

//main header for the application, includes logo image and slogan
const Header = (props) => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
      <img className="logo" src={nothinbutnasalogo} alt="Nothin' But Nasa Logo"></img>
      <h3>🤍 your favourite random nasa photos!</h3>
    </header>
  );
};

export default Header;