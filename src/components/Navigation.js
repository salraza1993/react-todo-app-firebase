import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul className="top-nav d-flex justify-content-end">
          <li>
            <Link className='btn btn-info' to="/login">
              <i className="fa-solid fa-user me-3"></i>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
