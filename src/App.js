import React from 'react';
import AuthContext from './state/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import ProtectedRoute from './routes/ProtectedRoute'
import ErrorPage from './pages/ErrorPage'


function App() {


  return (
    <AuthContext>
      <Router>
        <Switch>
          {routes.publicRoutes
            .map(({ path, component }) => (
              <Route key={path} exact path={path} component={component} />
            ))
          }
          {routes.protectedRoutes
            .map(({ path, component }) => (
              <ProtectedRoute key={path} exact path={path} component={component} />
            ))
          }

          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </AuthContext>

  );
}

export default App;
