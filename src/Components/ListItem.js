import React from "react";
import List from "./List";

const ListItem = ({movie}) => {
    return <div className="List-Item">
        <img alt={movie.title} className="movie-poster" src={movie.posterImg}/>
        <div className="movie-info">
            
        </div>
    </div>
    
}






export default ListItem
//This component has no state. Static. Just displaying list.