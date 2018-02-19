import React from 'react';
import {Route,Switch} from 'react-router-dom';

//Components
import App from './App.js';

//Components PAGES.
    //GENERAL LAY
        import General from './pages/general/';

        import Home from './pages/general/home/';
        
        import Offer from './pages/general/courses/offer';
        import CoursesGeneral from './pages/general/courses/';

        import DetailCourse from './pages/general/courses/detail';

    //ADMIN LAY
        import Dashboard from './pages/admin/';
        import CoursesDash from './pages/admin/coursesdash';

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
            <Route exact path="/dashboard/:name?/:id?" component={Dashboard} />

        {/* General*/}
            <Route exact path="/:name/:param?" component={General} />
        

        //Case of Error.
        <Route component={Page404} />

    </Switch>

</App>


export default AppRoutes;
