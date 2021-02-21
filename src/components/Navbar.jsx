import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Navbar = ({ routes }) => {
  const { pathname } = useLocation();

  return (
    <AppBar position='static'>
      <Tabs
        value={pathname}
        textColor='inherit'
        indicatorColor='secondary'
        centered
      >
        {
          routes.map(({name, path}, idx) => 
            <Tab
              label={name}
              value={path}
              component={Link}
              to={path}
              key={idx}
            />
          )
        }
      </Tabs>
    </AppBar>
  );
}

export default Navbar;