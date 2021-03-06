import React from 'react';
import AuthContext from './state/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import ProtectedRoute from './routes/ProtectedRoute'
import ErrorPage from './pages/ErrorPage'
import Layout from './layout'
import { BASE_PATH } from './routes/PATHS'


function App() {


  return (
    <AuthContext>
      <Router basename={BASE_PATH}>
        <Layout>
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
            <Route path="/*" component={ErrorPage} />
          </Switch>
        </Layout>
      </Router>
    </AuthContext>

  );
}

export default App;
