import React, { Component } from 'react';

//Components UI
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { getCourses } from './../../helpers/request';


import { ProgressCircle } from './../../../../../helpers/UI/misc';
import { ListMessage } from './../../../../../helpers/UI/messages';

const styles = {
    table: {

    },
    headStyle: {
        color: 'white',
        textAlign: 'left'
    },
    tableRowStyles: {
        color: 'white',
        textAlign: 'center'
    },
    tableBodyStyles: {}
}


export default class TableCourse extends Component {

    constructor(props){
        super(props);

        this.state = {
            loading: true,
            courses: [],
            message: "",
        }
    }
    componentDidMount() {
        console.clear();
        
        getCourses
            .then((response) => {
                this.loading();
                if (response._status) {
                    console.log("Correcto -> " + response._status);
                    this.setState({
                        courses: response._list
                    });
                } else {
                    this.setState({
                        message: response._message
                    });

                }
            });
    }

    

    requestListCourses() {
        this.loading();
        getCourses
            .then((response) => {

                if (response._status) {
                    console.log("Correcto -> " + response._status);
                    this.setState({
                        courses: response._list
                    });
                } else {
                    this.setState({
                        message: response._message
                    });

                }
                this.loading();

            });
    }



    loading() {
        this.setState({
            loading: !this.state.loading
        });
    }

    reload() {

        this.requestListCourses();
        console.log('Aqui estoy recargando');

    }


    render() {
        console.log(this.state.courses);
        console.log(this.props.pepe);

        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading} />
        }

        if (!this.state.courses.length > 0) {
            return <ListMessage
                message={this.state.message}
                onClick={this.reload.bind(this)} />
        }

        return (
            <Table
                selectable={false}
                className="z-depth-3"
                style={styles.table}
            >
                <TableHeader
                    displaySelectAll={false}

                >

                    <TableRow
                    >
                        <TableHeaderColumn style={styles.headStyle}>Code</TableHeaderColumn>
                        <TableHeaderColumn style={styles.headStyle}>Name</TableHeaderColumn>
                        <TableHeaderColumn style={styles.headStyle}>Mode</TableHeaderColumn>
                        <TableHeaderColumn style={styles.headStyle}>Opciones</TableHeaderColumn>
                    </TableRow>

                </TableHeader>

                <TableBody
                    displayRowCheckbox={false}
                    style={styles.tableBodyStyles}
                >
                    {
                        this.state.courses.map((course, index) =>
                            <TableRow key={index}>
                                <TableRowColumn style={styles.tableRowStyles}>{course.Code}</TableRowColumn>
                                <TableRowColumn style={styles.tableRowStyles}>{course.Name}</TableRowColumn>
                                <TableRowColumn style={styles.tableRowStyles}>{course.Mode}</TableRowColumn>
                                <TableRowColumn style={styles.tableRowStyles}>{course.Type}</TableRowColumn>
                                <TableRowColumn style={styles.tableRowStyles}>
                                    <div className="table-options">
                                        <button
                                            className="btn-flat"
                                            onClick={this.props.handleShow}
                                            name={course.Code} >

                                            <i 
                                                className="material-icons green-text text-lighten-3">
                                                pageview
                                            </i>

                                        </button>

                                        <button
                                            className="btn-flat"
                                            onClick={this.props.handleEdit}
                                            name={course.Code} >

                                            <i 
                                                className="material-icons orange-text text-lighten-3">
                                                mode_edit
                                            </i>

                                        </button>

                                        <button
                                            className="btn-flat"
                                            onClick={this.props.handleDelete}
                                            name={course.Code} >

                                            <i 
                                                className="material-icons red-text text-lighten-3">
                                                delete
                                            </i>

                                        </button>

                                    </div>

                                    
                                </TableRowColumn>
                            </TableRow>
                        )

                    }


                </TableBody>
            </Table>
        );
    }
}