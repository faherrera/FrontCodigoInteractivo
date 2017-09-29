import React from 'react';
import {Route,Switch} from 'react-router-dom';

//Components
import App from './App.js';

//Components PAGES.
    //GENERAL LAY
        import Home from './pages/general/home/';

    //ADMIN LAY


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
        //From Page General
        <Route exact path="/" component={Home} />

        //Case of Error.
        <Route component={Page404} />

    </Switch>

</App>


export default AppRoutes;
