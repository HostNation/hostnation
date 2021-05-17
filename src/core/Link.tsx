import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

export default ({ to, newTab, route: _, ...props }: any) => {
  const external = newTab || to.startsWith('http') || to.startsWith('mailto');
  return external ? (
    <a href={to} target="_blank" {...props} />
  ) : (
    <GatsbyLink to={to} {...props} />
  );
};
