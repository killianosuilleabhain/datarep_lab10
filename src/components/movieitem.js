import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// Movie Class
class MovieItem extends Component {
    constructor(){
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //Deletes class to delete movie
    DeleteMovie(){
        console.log('Delete: ' +this.props.movie._id);

        axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id)
        .then(()=>{
            this.props.reloadData();
        })
        .catch();

    }

    render() {
        return (
            <div>
                {/* Creates card for each movie*/}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.movie.Poster}></img>
                            <footer>
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
<Link to={"/edit/" +this.props.movie._id} className="btn btn-primary">Edit</Link>
{/* Deletes Movie */}
<Button variant="danger" onClick = {this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}
export default MovieItem;