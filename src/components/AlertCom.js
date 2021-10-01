import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert'

class AlertCom extends React.Component {

    render() {
        return (
            <>

                <Alert show={this.props.showError} variant="success">
                    <Alert.Heading>Something went wrong in getting location data</Alert.Heading>
                    <p>Status Code: {this.props.message}</p>
                </Alert>

            </>
        )
    }
}

export default AlertCom;