import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss'
import "./styles.css";
import "./assets/font/iconic/css/open-iconic-bootstrap.scss"

import { Switch, Route } from "react-router-dom";
import { Router } from "react-router";

import history from "./history";
import { Login } from "./views/Auth/index";
import { AuthThemeWrapper } from "./components/theme/AuthWrapper";
import { AdminRoutes } from "./routes/Admin";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/admin" children={AdminRoutes} />
        <Route path="/" children={() => (
          <AuthThemeWrapper>
            <Route path="/" component={Login} />
          </AuthThemeWrapper>
        )} />
      </Switch>
    </Router>
  );
}
