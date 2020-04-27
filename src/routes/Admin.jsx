import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from '../views/Admin/Dashboard';
import { AdminThemeWrapper } from '../components/theme/AdminWrapper';

export function AdminRoutes({ match, history }) {
  return (
    <AdminThemeWrapper history={history}>
      <Switch>
        <Route path={`${match.path}/dashboard`} exact component={Dashboard} />
        <Route path={`${match.path}/users`} exact component={Dashboard} />
        <Route
          path={`${match.path}/users/create`}
          exact
          component={Dashboard}
        />
        <Route path={`${match.path}/users2`} exact component={Dashboard} />
        <Route
          path={`${match.path}/users2/create`}
          exact
          component={Dashboard}
        />
        <Route path={`${match.path}/users3`} exact component={Dashboard} />
        <Route
          path={`${match.path}/users3/create`}
          exact
          component={Dashboard}
        />
        <Redirect from={match.path} to={`${match.path}/dashboard`} />
      </Switch>
    </AdminThemeWrapper>
  );
}
