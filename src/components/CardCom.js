import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import '../cssCom/CardCom.css';

class CardCom extends React.Component {

    render() {
        return (
            <>
                <Card className="bg-dark text-white">
                    <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.lat},${this.props.lon}&zoom=10`} alt="city name" />
                    <Card.ImgOverlay className="text">
                        <Card.Title>Location Map</Card.Title>
                        <Card.Text>{this.props.locationName}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </>
        )
    }
}

export default CardCom;