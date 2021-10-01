import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import '../cssCom/FormCom.css';

class FormCom extends React.Component {

    render() {
        return (
            <>
                 <Form className="infoForm" onSubmit={this.props.locationInfo}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="label">City Explorer App</Form.Label>
                        <Form.Control name="city" type="text" placeholder="Enter Place Name" />
                    </Form.Group>
                     <p className="message">City name needs to start with uppercase!</p>
                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>
                </Form>
            </>
        )
    }
}

export default FormCom;