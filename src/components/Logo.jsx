import React from 'react'
import { Link } from 'react-router-dom';
function Logo({width='100px'}) {
  return (
    <Link to="/">
      <img
        src="https://cdn-icons-png.flaticon.com/512/123/123729.png" 
        alt="Logo"
        style={{ width }}
      />
    </Link>
  );
}

export default Logo