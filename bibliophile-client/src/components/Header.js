import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/"
        activeClassName="active">Home</Link>
      {" | "}
      <Link to="/books" activeClassName="active">YourBooks</Link>
    </nav>
  );
};

export default Header;
