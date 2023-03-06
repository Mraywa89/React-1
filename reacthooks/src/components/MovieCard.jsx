import React from "react" 

const MovieCard = (props) => {
    return(
        <>
            <div>
                <h1>Title: {props.title} </h1>
                <p>Description: {props.description}</p>
                <p>Posterurl: {props.posterurl}</p>
                <p>Rating: {props.rating}</p>
            </div>
        </>
    )
}

export default MovieCard;
