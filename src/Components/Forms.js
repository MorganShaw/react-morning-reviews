import React, {Component} from "react";


class Forms extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            year: '',
            posterImg: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
            //needed the name attribute has to exist in input and has to match corresponding property on state. See morning review video at 10:04. This is destructuring off arrays. To make a univeral change handler. Also if you have an array with only one element in it, you can use this, too. Need square brackets to tell react it's a variable. The reason we do this is to make it universal, so it can do for title, year, and posterImg; otherwise, we'd have this.setState and title: e.target.value for title, year, posterImg. Less hard coding after all.
        })
    }
    render(){
        const {title, year, posterImg} = this.state;
        return (
            <form className="Form">
                <input 
                    name="title" 
                    placeholder="Title" 
                    value={title}
                    onChange={this.handleChange}/>
                <input 
                     name="year" 
                     placeholder="Year" 
                     value={year}
                     onChange={this.handleChange}/>
                <input 
                    name="posterImg" 
                    placeholder="Poster url" 
                    value={posterImg}
                    onChange={this.handleChange}/>
                <button     
                    type="submit">Add Movie</button>
            </form>
        )}
}


export default Forms


//destructuring ....goes between render and return. Destructuring title, year, posterImg. so we don't have to write this.state.title, etc. every time.