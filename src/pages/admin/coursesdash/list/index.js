import React from 'react';


//Components UI
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


const styles = {
    table:{
        
    },
    headStyle:{
        color:'white',
    },
    tableRowStyles:{
        color:'white'
    },
    tableBodyStyles:{}
}

export default class ListCourse extends React.Component{
    render(){
        return(
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
                        <TableHeaderColumn style={styles.headStyle}>ID</TableHeaderColumn>
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
                    <TableRow>
                        <TableRowColumn style={styles.tableRowStyles}>1</TableRowColumn>
                        <TableRowColumn style={styles.tableRowStyles}>999</TableRowColumn>
                        <TableRowColumn style={styles.tableRowStyles}>Android desde 0</TableRowColumn>
                        <TableRowColumn style={styles.tableRowStyles}>Presencial</TableRowColumn>
                        <TableRowColumn style={styles.tableRowStyles}>
                            <a href="#!" className="yellow-text text-accent-3" onClick={this.handleEdit}>
                                <i className="small material-icons">mode_edit</i> 
                            </a>

                            <a href="#!" className="red-text text-accent-2">
                                <i className="small material-icons">delete</i>
                            </a>
                        </TableRowColumn>
                    </TableRow>
                  
                </TableBody>
            </Table>
        );
    }
}