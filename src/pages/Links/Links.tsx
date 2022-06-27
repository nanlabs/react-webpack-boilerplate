import React, { FC } from 'react';
import { Routes, generatePath } from 'routes/Routes';
import { Link } from 'react-router-dom';
import DefaultLayout from 'layouts/Default';

const links = [
  {
    name: 'root',
    path: Routes.ROOT,
  },
  {
    name: 'powered-by',
    path: Routes.POWERED,
  },
  {
    name: 'user 1',
    path: generatePath(Routes.USER_DETAIL, { userId: '1' }),
  },
  {
    name: 'user 2',
    path: generatePath(Routes.USER_DETAIL, { userId: '2' }),
  },
];

const Links: FC = () => {
  return (
    <DefaultLayout>
      {links.map((link) => (
        <li key={link.path}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </DefaultLayout>
  );
};

export default Links;