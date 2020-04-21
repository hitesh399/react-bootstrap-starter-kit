
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { HeaderComponent } from "../components/theme/Header";
import Footer from "../components/theme/Footer";
import Dashboard from "../views/Admin/Dashboard";
import { getCookie } from "../utils";
import { SidebarComponent } from "../components/theme/Sidebar";
import { AdminThemeWrapper } from "../components/theme/AdminWrapper";

export function AdminRoutes({ match, history }) {

    /**
     * If Access token in not present in cookie then redirect to Login Page
     */
    if (!getCookie('ACCESS-TOKEN')) {
        history.push('/')
        return null;
    }

    return (
        <AdminThemeWrapper>
            <SidebarComponent />
            <div className="main-content">
                <HeaderComponent ></HeaderComponent>
                <div className="p-4">
                    <Switch>
                        <Route path={`${match.path}/dashboard`} exact component={Dashboard} />
                        <Route path={`${match.path}/users`} exact component={Dashboard} />
                        <Route path={`${match.path}/users/create`} exact component={Dashboard} />
                        <Route path={`${match.path}/users2`} exact component={Dashboard} />
                        <Route path={`${match.path}/users2/create`} exact component={Dashboard} />
                        <Route path={`${match.path}/users3`} exact component={Dashboard} />
                        <Route path={`${match.path}/users3/create`} exact component={Dashboard} />
                        <Redirect from={match.path} to={`${match.path}/dashboard`} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </AdminThemeWrapper>
    )

} 