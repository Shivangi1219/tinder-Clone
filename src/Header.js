import React from 'react';
import './Header.css';
import logo from './images/tinder_logo1.png';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

function header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" /> 
            </IconButton>

            <img className="header__logo" src={logo} alt="Tinder Logo"
            />
            
        </div>
    )
}

export default header
