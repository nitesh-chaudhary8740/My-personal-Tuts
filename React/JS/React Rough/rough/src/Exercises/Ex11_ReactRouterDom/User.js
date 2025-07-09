import React from 'react';
import { useParams, Link } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>User-{id}</h2>
      <div>
        <ul>
          <li>
            <Link to={`/user/Home/${id}`}>Home</Link>
          </li>
          <li>
            <Link to={`/user/About/${id}`}>About</Link>
          </li>
          <li>
            <Link to={`/user/Contact/${id}`}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;