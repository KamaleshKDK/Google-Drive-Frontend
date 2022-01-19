import React from 'react'
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Header() {
    return (
       <>
        <div className='header'>
            <div className='header__logo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png" />
                <span>Drive</span>
            </div>

            <div className='header__search'>
                <SearchIcon />
                <input type="text" placeholder='Search in Drive' />
                <FormatAlignCenterIcon />
            </div>
            <div className='header__icons'>
                <span>
                <HelpOutlineIcon/>
                </span>

                <span>
                <AppsIcon/>
                <AccountCircleIcon/>
                </span>
            </div>
        </div>
      
       </>
    )
}

export default Header
