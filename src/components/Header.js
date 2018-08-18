import React from "react";
import PropTypes from "prop-types";
import './App.css';

const Header = ({message}) => {
  return(
    <div>
      <h2 className="Header text-center">{message}</h2>
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
    </div>
  );
};

Header.propTypes = {
  message: PropTypes.string
};

export default Header;
