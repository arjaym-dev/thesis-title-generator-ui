import React from 'react';
import HeadTag from '../components/Head/Head';
import Header from '../components/Header/Header';

type Props = {
  children: any;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <HeadTag />
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Layout;
