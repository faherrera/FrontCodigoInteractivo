import React from 'react';

//Assets
    import noImage from './../../../../assets/img/noimage.jpg';

//Components
    import OfferItem from './offerItem';    //Item Course
    import Filters from './filters';

//UI
    import { ProgressCircle } from './../../../../helpers/UI/misc';
    import { ServerMessageBox} from './../../../../helpers/UI/messages/ServerMessageBox';

//Request
    import { getAllCourses } from './../../../../helpers/requests/CoursesRequest';

//Routes
    import { arrayUpload } from './../../../../helpers/routesConfig';


export default class Offer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            // filter: ['backend'],
            loading: true,
            courses:[],
            message:null,
        }
    }

    componentDidMount() {
       

        this.populateOffer();
    }
    populateOffer() {
        this.setState({
            message: null,
            loading: true
        });

        getAllCourses((res) => {
            if (res.status) {
                return this.setState({
                    courses: res.data,
                    loading:false
                });
            }

            return this.setState({
                loading:false,
                message: res.message,
            });

        });
    }

    render(){
        
        if(this.state.loading)  return <ProgressCircle active/>
        
        if (this.state.message) return <ServerMessageBox message={this.state.message} onClick={this.populateOffer.bind(this)}/>

        let {courses} = this.state; 
        let pathImage = arrayUpload.courses;

        return(
            <section className="page-offer">

                <div className="section blue-grey lighten-1">
                    
                    <div className="container">
                        <h3 className="section-title"> Oferta de cursos  </h3>
                    </div>

                </div>

                <div className="container">
                    <div className="row">

                        {
                            
                            courses.map((item,index)=>{
                                return <OfferItem
                                    key={index}
                                    itemClass="col s12 m6 l4"
                                    imgCard={item.Thumbnail ? pathImage + item.Thumbnail : noImage}
                                    title={item.Name}
                                    shortDescription={item.Description}
                                    level={item.modeArray[item.Mode]}
                                    code={item.Code}
                                />
                            })
                        }
                       
                        
                    </div>
                </div>
            </section>
        );
    }
}