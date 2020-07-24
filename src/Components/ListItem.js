import React from "react";
import List from "./List";

const ListItem = (props) => {
   const { movie, deleteMovie } = props; 
   return (
        <div className="List-Item">
            <img alt={movie.title} className="movie-poster" src={movie.posterImg}/>
            <div className="movie-info">
                <p>{movie.title}</p>
                <p>{movie.year}</p>

            </div>
            <p className="delete-button" onClick={() => deleteMovie(movie.id)}>X</p>
        </div>
   );
    
}






export default ListItem
//This component has no state. Static. Just displaying list.

//Can destructure movie in parameter of function expression - but it's better to just pass in props and use the const {movie}...

//the onClick even in the p tag needs an arrow function, or it'll break the code.

//How do you prevent someone from adding a blank movie (no input, but it adds to the list a blank spot with X)? Lucas mentioned it at 10:17am lecture on Friday 7/24/20.

//Today we added to functions to list.js, because they're changing the values of the list, which info (state) was sitting in list.js.

//