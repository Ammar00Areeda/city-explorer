import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import '../cssCom/TableCom.css';

class TableCom extends React.Component {

    render() {
        return (
            <>
                <Table className="table" striped bordered hover>
                    <tbody>
                        <tr>
                            <td>{this.props.col1[0]}</td>
                            <td>{this.props.col2[0]}</td>
                        </tr>
                        <tr>
                            <td>{this.props.col1[1]}</td>
                            <td>{this.props.col2[1]}</td>
                        </tr>
                        <tr>
                            <td>{this.props.col1[2]}</td>
                            <td>{this.props.col2[2]}</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}

export default TableCom;