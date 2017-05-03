import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Welcome from './Welcome';
import Settings from './Settings';

const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route path="/settings" component={Settings}/>
        </Switch>
    </div>
)

export default Main;