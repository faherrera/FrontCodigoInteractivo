import React from 'react';
import {Route,Switch} from 'react-router-dom';

//Components
import App from './App.js';

//Components PAGES.
    //GENERAL LAY
        import General from './pages/general/';
        import Client from './pages/client/';

        import Home from './pages/general/home/';
        
        
    //ADMIN LAY
        import Dashboard from './pages/admin/';

    //NoNav Lay
        import LoginDash from './pages/nonav/logindash/'
    //Error Page
    const Page404 = () => {
        return(
            <p>
                ERROR 4004
            </p>
        );
    }

const AppRoutes = () => 
<App>
    <Switch>
        {/*From Page General*/}
            <Route exact path="/" component={Home} />

        {/* Dashboard*/}
            <Route exact path="/dashboard/login" component={LoginDash} /> 
            <Route exact path="/dashboard/:name?/:id?" component={Dashboard} />

        {/* Client */}
            <Route exact path="/:name/:param?" component={Client} />
        

        //Case of Error.
        <Route  component={Page404} />

    </Switch>

</App>


export default AppRoutes;
