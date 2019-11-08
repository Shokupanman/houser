import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/api/wizard' component={Wizard} />
    </Switch>
);