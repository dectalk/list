import React from 'react';
import { Link } from 'gatsby';

const Links = ({ to, ...props }) => {
  return <Link {...props} to={to} />;
};

export default Links;
