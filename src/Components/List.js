import React from "react";

class List extends React.Component {
    constructor(){
        super();

        this.state = {
            movies: []
        }
    }
    render(){
        return <h1>This is the List Component</h1>
    }
}


export default List


//Best practice to name component the file name.