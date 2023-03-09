import React from "react" 
import { Link, useParams } from "react-router-dom";
const Description = () => {
    const {id} = useParams();
    return (
        <>
            <h1>Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus voluptas ratione, unde exercitationem rem optio ea saepe corrupti quis, sequi cupiditate laboriosam nam dolores aliquam dolorum natus eos quo. Odio!</h1>
            <h2>ID: {id}</h2>
            <Link to='/'>Home</Link>
        </>
    )
}

export default Description;