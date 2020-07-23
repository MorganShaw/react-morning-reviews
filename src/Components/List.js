import React from "react";
import movies from '../data/movies.json';
import ListItem from "../Components/ListItem"
import Forms from "./Forms"

class List extends React.Component {
    constructor(){
        super();

        this.state = {
            movies: movies
        }
    }
    render(){
        const moviesMap = this.state.movies.map(movie => {
            return <ListItem key={movie.id} movie={movies}/>
        })
        return <div className="List">
            <Forms/>
            {moviesMap}
            </div>
    }
}


export default List


//Best practice to name component the file name.