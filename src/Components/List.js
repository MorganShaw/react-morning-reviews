import React from "react";
import movies from '../data/movies.json';
import ListItem from "../Components/ListItem"
import Forms from "./Forms"

class List extends React.Component {
    constructor(){
        super();

        this.state = {
            movies: movies
        };
        this.addMovie = this.addMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this); 
    }

    addMovie(title, year, posterImg){{
        const id = this.state.movies[this.state.movies.length - 1].id + 1
        const newMovie = {id, title, year, posterImg}
        const newArr = [...this.state.movies, newMovie]

        this.setState({
            movies: newArr
        })
    }}

    deleteMovie(id){
        const index = this.state.movies.findIndex(movie => movie.id === id)
        const newArr = [...this.state.movies]
        newArr.splice(index, 1)

        this.setState({
            movies: newArr
        })
    }
    //movie is the same as saying element in the above findIndex() method. Name it whatever you want. Movie represents the element in the array.

    render(){
        const moviesMap = this.state.movies.map(movie => {
            return <ListItem deleteMovie={this.deleteMovie} key={movie.id} movie={movie}/>
        })
        return ( 
            <div className="List">
                <Forms addMovie={this.addMovie}/>
                {moviesMap}
            </div>
        )    
    }
}


export default List


//Best practice to name component the file name.
//In form - adding one prop to Form (the addMovie={this.state.addMovie}. 
//Each props object is specific to the info the parent wants to send to the child. Watch morning review video at 9:48am on 7/24/20 Friday.
//Need key=   for React. 
//Now, <List Item in the render function has two pieces of information to pass as props to children. 
