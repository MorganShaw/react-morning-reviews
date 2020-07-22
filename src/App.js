import React from "react";
import "./App.css";
import List from "./Components/List.js";

const App = () => {
    return(
        <div className="App">
            <h1 className="movie-list-title">The Most Amazing Movie List</h1>
            <List />
        </div>
    )
}

export default App


// Another option: Class Component can manage state
// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {

//         }
//     }
//     render(){
//         return(
//             <h1>This is the App Component</h1>
//         )
//     }
    
// }

//A third option. But I don't know if they would all look the same.
//Functional Component below. Does not manage state. 
// function App() {
//     return(
//         <h1>This is the App Component</h1>
//     )
// }



//Only need render for a class component. 
//When you start building multiple components in react, you need to wrap them in a JSX element - one single element that contains all other elements. 