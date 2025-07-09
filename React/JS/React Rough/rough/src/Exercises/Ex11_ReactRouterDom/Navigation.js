import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/user/1'}>User 1</Link>
        </li>
        <li>
          <Link to={'/user/2'}>User 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;