import React from 'react';

import DetailHeader from './detailHeader';
import DetailContent from './detailContent';

export default class DetailCourse extends React.Component{

    render(){ 
        return(

            <div className="page-detail-course">

                <DetailHeader/>
                <DetailContent/>

            </div>
        );

    }
}