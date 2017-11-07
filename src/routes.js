import React from 'react';
import {Route,Switch} from 'react-router-dom';

//Components
import App from './App.js';

//Components PAGES.
    //GENERAL LAY
        import Home from './pages/general/home/';
        
        import Offer from './pages/general/courses/offer';

        import DetailCourse from './pages/general/courses/detail';

        import Class from './pages/general/courses/class';

    //ADMIN LAY
        import DashBoard from './pages/admin/';
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
        //From Page General
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={Offer} />
        <Route exact path="/detailcourse" component={DetailCourse} />

        <Route exact path="/class" component={Class} />

        <Route exact path="/dashboard/:name/" component={DashBoard} />
        {/* <Route exact path="/dashboard/" component={DashBoard} /> */}
        {/* <Route exact path="/coursesdash" component={CoursesDash} /> */}

        //Case of Error.
        <Route component={Page404} />

    </Switch>

</App>


export default AppRoutes;
