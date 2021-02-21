import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Navbar from './Navbar';
import routes, { fallback } from './routes';

export const App = () => {
  return (
    <Router>
      <Navbar routes={routes} />
      <Container className='app' fixed>
        <Box m={2} borderRadius={5} boxShadow={1} bgcolor='#eee'>
          <Switch>
            {
              routes.map(({path, component}, idx) => 
                <Route path={path} component={component} key={idx} />)
            }
            <Route path='/'>
              <Redirect to={fallback} />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
