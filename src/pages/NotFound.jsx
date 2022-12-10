import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className={'header-title'}>
        Oops! Your page is <mark>Not Found</mark>.
      </h1>
      <h2 className="header-subtitle">
        Let's go to the <Link to="/">Home</Link>
      </h2>
    </div>
  );
};

export default NotFound;