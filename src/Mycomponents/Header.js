import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import History from './History';
import './Header.css';
import Logout from './Logout'; // Import the Logout component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './profile.css'; // Import profile.css
import { ReactComponent as personIcon } from './person-circle.svg';


export const Header = () => {
  const GoGirlStyle = {
    fontSize: '24px',
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className='navbarStart'>
        <Link className='navbarStartLinks' to='/'>
          <b>
            <span style={GoGirlStyle}>Placement Guidance Bot</span>
          </b>
        </Link>
        <Link className='navbarStartLinks' to='/'>Home</Link>
        <Link className='navbarStartLinks' to='/about'>About</Link>
        <Link className='navbarStartLinks' to='/history'>History</Link>
        <Link className='navbarStartLinks' to='/logout'>Logout</Link>
      </div>
    </>
  );
};

export default Header;
