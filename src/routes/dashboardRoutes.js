/**
 * Dasboard Routes
 */
import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../appModules/notfound/index"

const DashboardRoute = ({ match }) => (
    <div>
        <Switch>
            <Route path={`${match.url}/*`} component={NotFound} />
        </Switch>
    </div>
);

export default DashboardRoute;
