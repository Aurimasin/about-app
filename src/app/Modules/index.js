import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage/Containers/View'
import Education from './Education/Containers/Education'
import Work from './Work/Containers/Work'
import Contacts from './Contacts/Components/View';
import NotFoundPage from './404/Components/View'

export default () => (
    <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/education' component={Education} />
        <Route path='/work' component={Work} />
        <Route path='/contacts' render={(props) => <Contacts {...props} isVisible={true}/>}/>
        <Route component={NotFoundPage} />
    </Switch>
);