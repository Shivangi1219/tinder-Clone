import React from "react";
import "./Header.css";
import logo from "./images/tinder_logo1.png";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";

function Header({backButton}) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick = { () => history.replace(backButton) }>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}
      

      <Link to="/">
        <img className="header__logo" src={logo} alt="Tinder Logo" />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
