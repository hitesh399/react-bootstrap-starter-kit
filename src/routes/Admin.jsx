
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/theme/Header";
import Footer from "../components/theme/Footer";
import AdminThemeWrapper from "../components/theme/AdminWrapper";
import Dashboard from "../views/Admin/Dashboard";

export function AdminRoutes({ match }) {
    return (
        <AdminThemeWrapper>
            <Header />
            <Redirect path={match.path} to={`${match.path}/dashboard`} />
            <Route path={`${match.path}/dashboard`} component={Dashboard} />
            <Footer />
        </AdminThemeWrapper>
    )

} 