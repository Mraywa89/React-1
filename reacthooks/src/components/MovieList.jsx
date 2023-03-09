import React, { useState } from "react" 
import MovieCard from "./MovieCard";

const MovieList = () => {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [posterurl, setposterurl] = useState("");
    const [rating, setrating] = useState("");
    const [ratingfilter, setratingfilter] = useState(0);
    const [list, setlist] = useState([]);
    const [filtered, setfiltered] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //list.push({title, description, posterurl, rating});
        setlist([...list, {title, description, posterurl, rating, id:list.length+1}])
        setfiltered(list)
    };

    const filterli = (e) => {
        setfiltered(list.filter((el)=> el.title.includes(e.target.value)))
    }

    const filter2 = (e) => {
        e.preventDefault();
        setfiltered(list.filter((el)=> el.rating >= ratingfilter))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>settitle(e.target.value)}/>
                <input onChange={(e)=>setdescription(e.target.value)}/>
                <input onChange={(e)=>setposterurl(e.target.value)}/>
                <input type="number" onChange={(e)=>setrating(e.target.value)}/>
                <input type="submit"/>
            </form>
            <input onChange={filterli}/>
            <form onSubmit={filter2}>
                <input type="number" onChange={(e)=> setratingfilter(e.target.value)}/>
                <input type="submit" />
            </form>
            <div>
                {filtered.map((el, index) => (
                    <MovieCard 
                        title={el.title} 
                        description={el.description} 
                        posterurl={el.posterurl} 
                        rating={el.rating} 
                        key={index}
                        id = {el.id}
                    />
                ))}
            </div>
        </>
    )
}

export default MovieList;