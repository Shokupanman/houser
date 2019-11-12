import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'
import Step1 from './Components/Wizard/step1';
import Step2 from './Components/Wizard/step2';
import Step3 from './Components/Wizard/step3';


export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/wizard' component={Wizard} />
        <Route path='/step1' component={Step1} />
        <Route path='/step2' component={Step2} />
        <Route path='/step3' component={Step3} />
    </Switch>
);