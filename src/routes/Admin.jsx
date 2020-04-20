
import React from "react";
import { Route, Redirect } from "react-router-dom";
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
                    <Redirect path={match.path} to={`${match.path}/dashboard`} />
                    <Route path={`${match.path}/dashboard`} component={Dashboard} />
                </div>
                <Footer />
            </div>
        </AdminThemeWrapper>
    )

} 