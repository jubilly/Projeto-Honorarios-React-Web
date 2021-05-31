import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home/'
import ForgotPassword from '../pages/forgot-password'
import NotFound from '../notfound'
import MyHonorarios from '../pages/my-honorarios'
import MyHonorariosDetailed from '../pages/my-honorarios-detailed'
import CalcHonorarios from '../pages/calc-honorarios/CalcHonorarios'
import HonorariosNews from '../pages/calc-honorarios/HonorariosNew'
import HonorariosHistory from '../pages/calc-honorarios/HonorariosFilters'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Register} exact path="/register"/>
            <Route component={ForgotPassword} exact path="/forgot-password"/>
            <Route component={CalcHonorarios} exact path="/calc-honorarios"/>
            <Route component={HonorariosNews} exact path="/new-honorarios"/>
            <Route component={HonorariosHistory} exact path="/honorarios-history"/>
            <Route component={MyHonorarios} exact path="/my-honorarios"/>
            <Route component={MyHonorariosDetailed} exact path="/my-honorarios-detailed"/>
            <Route component={Home} exact path="/"/>
            <Route component={NotFound}/>
 
        </Switch>
    </BrowserRouter>
)

export default Routes