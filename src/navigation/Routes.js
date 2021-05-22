import React from 'react'

import { Router, Switch, Route } from 'react-router'

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home/'
import ForgotPassword from '../pages/forgot-password'
import NotFound from '../notfound'
import MyHonorarios from '../pages/my-honorarios'
import MyHonorariosDetailed from '../pages/my-honorarios-detailed'
import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Register} exact path="/register"/>
            <Route component={ForgotPassword} exact path="/forgot-password"/>
            <Route component={MyHonorarios} exact path="/my-honorarios"/>
            <Route component={MyHonorariosDetailed} exact path="/my-honorarios-detailed"/>
            <Route component={Home} exact path="/"/>
            <Route component={NotFound}/>
 
        </Switch>
    </Router>
)

export default Routes