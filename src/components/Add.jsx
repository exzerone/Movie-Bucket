import React from 'react';
import key from '../../config.js'; 
import $ from 'jquery';

class Add extends React.Component{
  constructor(props){
    super(props);
    this.state={
      query:"",
      result:[]
    }
    this.queryHandler = this.queryHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  queryHandler(e){
    e.preventDefault();
    this.setState({query:e.target.value})
  }

  clickHandler(e){
    e.preventDefault();
    var array = [];
    // if (!this.state.result.includes(this.state.query)){
    //   array.push(this.state.query)
    // }
    // this.props.addHandler(array)
    $.get({
      url: `https://api.themoviedb.org/3/search/movie?api_key=${key.api}&query=${this.state.query}`,
      data: String,
      success: (data)=>{
        data.results.forEach((result)=>{
          if (result['poster_path'] !== null || result.title !== null){
            var poster = result['poster_path'];
            var obj = {
              title: result.title,
              image: `https://image.tmdb.org/t/p/w500/${poster}`
            }
            if (obj.image !== null || obj.title !== null){
              array.push(obj)
              console.log('this is array', array)
              this.props.addHandler(array.slice(0, 8))
            }
          }
        })
      }
    })
  }  

  render(){
    return(
      <div>
        <input onChange={this.queryHandler} className="addbar" type="text" placeholder="Add movie titles here..."></input>
        <input onClick={this.clickHandler} className="addbutton" type="submit" value="Add"></input>
      </div>

    )
  }
}

export default Add;