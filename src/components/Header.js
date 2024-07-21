import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Library Logo" className="header-logo" />
      <h1>Library Management System</h1>
    </header>
  );
};

export default Header;
