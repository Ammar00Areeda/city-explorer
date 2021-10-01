import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import '../cssCom/Movies.css';

class Movies extends React.Component {

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.movieItem.image_url} alt={this.props.movieItem.title} />
                    <Card.Body>
                        <Card.Title>Title: {this.props.movieItem.title}</Card.Title>
                        <Card.Text>Overview: {this.props.movieItem.overview}</Card.Text>
                        <Card.Text>Average Votes: {this.props.movieItem.average_votes}</Card.Text>
                        <Card.Text>Total Votes: {this.props.movieItem.total_votes}</Card.Text>
                        <Card.Text>Popularity: {this.props.movieItem.popularity}</Card.Text>
                        <Card.Text>Released on: {this.props.movieItem.released_on}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Movies;