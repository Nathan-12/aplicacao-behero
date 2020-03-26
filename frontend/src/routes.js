import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './views/Login'
import Register from './views/Cadastro'
import Profile from './views/Profile'
import NewIncident from './views/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} /> 
                <Route path="/cadastro" component={Register} />
                <Route path="/perfil" component={Profile} />
                <Route path="/cadastrar/caso" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}