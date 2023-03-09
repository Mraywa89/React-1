import React from "react" 
import { Link } from "react-router-dom";


const MovieCard = (props) => {
    return(
        <>
            <div>
                <h1>Title: {props.title} </h1>
                <p>Description: {props.description}</p>
                <p>Posterurl: {props.posterurl}</p>
                <p>Rating: {props.rating}</p>
                <p>Id: {props.id}</p>
                <Link to={"/description/" + props.id}>Description</Link>
            </div>
        </>
    )
}

export default MovieCard;
